import { Button, Layout, Modal, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { EventCalendar } from '../components/Eventcalendar'
import { EventForm } from '../components/EventForm'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { iEvent } from '../models/iEvent'

const Event: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { guests, events } = useTypedSelector(state => state.event)
  const { user } = useTypedSelector(state => state.auth)

  const { fetchGuests, createEvent, fetchEvents } = useActions()

  useEffect(() => {
    fetchGuests()
    fetchEvents(user.username)
  }, [])

  const addNewEvent = (event: iEvent) => {
    setIsModalVisible(false)
    createEvent(event)
  }

  return (
    <Layout>

      <EventCalendar events={events} />
      <Row justify='center'>
        <Button
          onClick={() => setIsModalVisible(true)}>
          Добавить событие
        </Button>
      </Row>
      <Modal
        title="Добавить событие"
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}>
        <EventForm
          guests={guests}
          submit={addNewEvent} />

      </Modal>
    </Layout>
  )
}

export default Event