import { Button, DatePicker, Modal, Row } from 'antd'
import React, { useState } from 'react'
import { EventCalendar } from '../components/Eventcalendar'
import { EventForm } from '../components/EventForm'


const Event: React.FC = () => {
  const [isModalVisible , setIsModalVisible] = useState(false)
  return (
    <div>
      <EventCalendar events={[]}/>
      <Row justify='center'>
        <Button
         onClick={()=> setIsModalVisible(true)}>
          Добавить событие
        </Button>       
      </Row>
      <Modal
        title="Добавить событие"
        visible={isModalVisible}
        footer={null}
        onCancel={()=> setIsModalVisible(false)}>
          <EventForm/>
          
      </Modal>
    </div>
  )
}

export default Event