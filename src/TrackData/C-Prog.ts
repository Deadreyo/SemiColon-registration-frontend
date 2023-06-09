import EmbeddedCImage from '../assets/Embedded C.png'
import TrackData from '../types/TrackData'

const cProg: TrackData = {
  title: 'C Programming',
  description:
    'Operating systems, games, and mobile apps are all made with the help of the robust and popular programming language C. You will learn topics including variables, data types, operators, control flow, functions, arrays, pointers, memory allocation, data structure, and more. Join us to build a strong foundation in C programming and take your skills to the next level.',
  objectives: [
    "This course will give you a strong foundation in C programming and embedded C, regardless of your level of programming experience. You'll have a head start understanding the topics of this workshop if you have a basic understanding of any programming language.",
  ],
  requirements: [
    '1. Logic number system (0,1)',
    '2. Background in any programming language',
  ],
  content: [
    '1. Introduction to the C language and Embedded C (Variables, data types, part of data modifiers, I/O ) ',
    '2. C Operators &Flow Control (if conditions and loops)',
    '3. Function ',
    '4. Arrays  ',
    '5. String  ',
    '6. Pointer  ',
    '7. Dynamic Memory Allocation  ',
    '8. Struct, Union, and Enum ',
    '9. Memory [Data modifiers and visibility Modifiers, Memory Layout(.bss,.data),Files in C ] ',
    '10. Preprocessor directive, toolchain',
    '11. Data Structure',
  ],
  noOfSessions: '9-12 Sessions in 4 week',
  id: 'c-prog',
  image: EmbeddedCImage,
  active: false,
}

export default cProg
