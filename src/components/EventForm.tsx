import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { Moment } from 'moment';
import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { iEvent } from '../models/iEvent';
import { iUser } from '../models/iUser';
import { formatDate } from '../utils/date';
import { rules } from '../utils/rules';

interface EventFormProps {
  guests: iUser[];
  submit: (event: iEvent) => void
}

export const EventForm: React.FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<iEvent>({
    autor: '',
    guest: '',
    date: '',
    description: '',
  } as iEvent);

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date?.toDate()) });
    }
  }
  const { user } = useTypedSelector(state => state.auth)

  const submitForm = () => {
    props.submit({ ...event, autor: user.username });

  }

  return (
    <Form onFinish={() => submitForm()}>

      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.require()]}
      >
        <Input
          onChange={e => setEvent({ ...event, description: e.target.value })}
          value={event.description} />

      </Form.Item>

      <Form.Item
        label="Дата события"
        name="date"
        rules={[rules.require(), rules.isDateAfter('Нельзя создать дату из прошлого')]}>
        <DatePicker
          onChange={(date) => selectDate(date)}
        />
      </Form.Item>

      <Form.Item
        label="пользователи"
        name="users"
        rules={[rules.require()]}
      >
        <Select style={{ width: 120 }} onChange={(guest: string) => (setEvent({ ...event, guest }))}>
          {props.guests.map(guest =>
            <Select.Option key={guest.username} value={guest.username}>{guest.username}</Select.Option>
          )}

        </Select>
      </Form.Item>
      <Row justify='end'>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}