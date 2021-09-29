import { Button, DatePicker, Form, Input, Row, } from 'antd';
import Select from 'rc-select';
import { rules } from '../utils/rules';

export const EventForm: React.FC = () => {
  return (
    <Form >

      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.require()]}
      >
        <Input/>

      </Form.Item>

      <Form.Item
        label="Дата события"
        name="date"
        rules={[rules.require()]}>
        <DatePicker />
      </Form.Item>
      <Form.Item>
        <Select style={{ width: 120 }}>
          <Select.Option value="jack">Jack</Select.Option>
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