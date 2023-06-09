import DesktopImage from '../assets/CC--.png'
import TrackData from '../types/TrackData'
const desktop: TrackData = {
  title: 'C++ App. Development',
  description:
    'Learning development using C++ and Qt is very beneficial for aspiring software developers as it provides an opportunity to gain experience with a powerful language and framework used for building complex applications. C++ and Qt introduce many fundamental concepts that help you as a software developer even if you switch later on to different frameworks or programming languages.',
  objectives: [
    '1. Learn/Review all the needed c++ concepts',
    '2. Learn how to make GUIs with Qt',
    '3. Make your own desktop application as a final project',
  ],
  requirements: [
    'Previous knowledge of c++ or any programming language will be enough. If you have no programming knowledge though don’t let it stop you from joining, you will just need to put in extra effort into learning.',
  ],
  content: [
    '1. Recap of C++ and Object Oriented Programming',
    '2. Making cross-platform desktop apps using Qt',
  ],
  noOfSessions: ' 7-8 sessions in 4-5 weeks',
  id: 'desktop',
  image: DesktopImage,
  active: true,
}

export default desktop
