import FlutterImage from '../assets/flutter.jpg'
import TrackData from '../types/TrackData'
const flutter: TrackData = {
  title: 'Flutter',
  description:
    'Flutter is a popular mobile app development framework that allows you to build high-quality, natively compiled apps for iOS, Android, and the web from a single codebase. This workshop is designed to introduce you to Flutter and its key concepts, so that you can start building your own mobile apps.',
  objectives: [
    '1. Understand the basics of Flutter and its development environment.',
    "2. Learn how to create user interfaces with Flutter's widgets and layout system.",
    '3. Discover how to use Flutter to manage app data and interact with APIs',
    '4. Gain an understanding of how to add animations and interactivity to your app',
    "5. Learn about Flutter's hot reload feature and how to use it to speed up development.",
    '6. Understand how to build and test your app for both iOS and Android platforms.',
    '7. Learn about best practices for mobile app development using Flutter.',
    '8. Leave the workshop with a solid foundation in Flutter and the confidence to continue building your own apps',
  ],
  requirements: [
    '1. A laptop with a recent operating system (Windows, macOS, or Linux) and a reliable internet connection',
    '2. The ability to install software on their laptop including the Flutter SDK, a code editor, and other required dependencies.',
    '3. A basic understanding of programming concepts such as variables, functions, and control structures',
    '4. Familiarity with at least one programming language, such as Java, Swift, or JavaScript.',
    '5. A willingness to learn and experiment with new technologies',
    '6. Patience and persistence, as mobile app development can sometimes be challenging and require debugging and problem-solving skills.',
    '7. Access to a smartphone or tablet (iOS or Android) for testing and deploying apps',
    '8. Availability for all 8 workshop sessions, as each session will build on the concepts covered in the previous sessions.',
  ],
  content: [
    '1. Introduction to Flutter and Development Environment',
    '2. Widgets and Layouts',
    '3. Stateless Widgets & Stateful Widgets',
    '4. Navigation and Routing',
    '5. Working with Data',
    '6. State Management',
    '7. Animations and Custom Widgets',
    '8. Deployment and Best Practices',
  ],
  noOfSessions: '8 sessions one each week',
  id: 'flutter',
  image: FlutterImage,
  active: true,
}

export default flutter
