import 'package:exemplo_app_flutter/constants.dart';
import 'package:flutter/material.dart';

import 'screens/login/login_page.dart';
import 'screens/splash/splash_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        appBarTheme: const AppBarTheme(
          color: Colors.white,
          toolbarTextStyle: TextStyle(
            color: Color(0XFF8B8B8b),
            fontSize: 18,
          ),
          elevation: 0,
          iconTheme: IconThemeData(
            color: Colors.purple,
          ),
        ),
        scaffoldBackgroundColor: Colors.white,
        fontFamily: 'Muli',
        textTheme: const TextTheme(
          bodyText1: TextStyle(color: kTextColor),
          bodyText2: TextStyle(color: kTextColor),
        ),
      ),
      initialRoute: '/splash',
      routes: {
        '/splash': (context) => const SplashScreen(),
        '/login': (context) => const LoginPage(),
      },
    );
  }
}
