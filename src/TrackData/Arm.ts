import ArmImage from '../assets/ArmImage.jfif'
import TrackData from '../types/TrackData'

const Arm: TrackData = {
  title: 'ARM',
  description:
    "ARM architecture is a popular processor architecture used in a variety of devices, as smartphones, laptops, and embedded systems. It's designed to be energy-efficient, fast, and scalable, making it an excellent choice for different applications. The workshop includes arm architecture, RCC clock, interrupt, DMA, and more. By the end, you will have an excellent understanding of the STM32F103 microcontroller and its capabilities.",
  objectives: [
    'By the end of this course, you will have a thorough understanding of the STM32F103 microcontroller and its capabilities. You will be able to confidently design and develop embedded systems using arm architecture unlocking its full potential and taking your skills to the next level.',
  ],
  requirements: [
    '1. C/C++ development experience is a must!',
    '2. Embedded C and dealing with the compilation process is a must',
    '3. Dealing with any micro-controller is a must',
    '4. Basic knowledge of Digital electronics.',
  ],
  content: [
    '1. ARM Architecture',
    '2. RCC Peripheral',
    '3. DIO Peripheral',
    '4. NVIC',
    '5. NVIC Driver',
    '6. EXTI',
    '7. SysTick',
    '8. UART',
    '9. SPI',
    '10. DMA',
  ],
  noOfSessions: '9-12 Sessions in 4 week',
  id: 'arm',
  image: ArmImage,
  active: false,
}

export default Arm
