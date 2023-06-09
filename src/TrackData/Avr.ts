import AvrImage from '../assets/avr-icon-480x280.jpg'
import TrackData from '../types/TrackData'
const Avr: TrackData = {
  title: 'AVR',
  description:
    "AVR microcontrollers are widely used in a variety of applications, from simple DIY projects to complex industrial systems. You will learn topics including Embedded Systems, module drivers, DIO, timers, ADC, communication protocols, and more By the end of this course, Join us to build a solid understanding of how to work with AVR microcontrollers and design your embedded systems using them. So let's dive in and start mastering AVR microcontrollers!",
  objectives: [
    'By the end of the course you will know the concepts of Embedded Systems and get skilled in writing module drivers to interface with any MCU that will make you compatible to go throw embedded track with many embedded system companies.',
  ],
  requirements: [
    '1. Knowledge of C language is a MUST.',
    '2. Good knowledge of Embedded C',
    '3. Basic knowledge of Digital electronics.',
  ],
  content: [
    '1. Intro to Embedded Systems.',
    '2. Interfacing (GPIO & 7 segment & buzzer)',
    '3. AVR Interrupts',
    '4. AVR Timers',
    '5. ADC and ultrasonic ',
    '6. External Interfacing (LCD & Keypad)',
    '7. Communication Protocols (UART and SPI)',
  ],
  noOfSessions: '9-12 Sessions in 4 week',
  id: 'avr',
  image: AvrImage,
  active: true,
}

export default Avr
