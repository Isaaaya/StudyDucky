<div align="center">
  <img src='https://res.cloudinary.com/dsvapbrsj/image/upload/c_fill,h_150,q_100,w_150/v1721930259/Isaaaya-Blog/icon_wzz9mq.webp' alt='StudyDucky Logo' />
</div>

&nbsp;

**StudyDucky** is a completely free Ukrainian-English languages oriented **learning app** for IOS. 

The app intends to help people learn the languages without any obstacles. StudyDucky offers multiple kinds of exercises for enhancing **listening**, **writing** and **translation** skills. It also helps users learn new vocabulary with sets of flashcards on diverse topics. Users can also create custom flashcard sets for more personalised studying experience. Grammar explaining posts are also offered. Any time users have any questions or issues, they can [contact the developer](https://github.com/Isaaaya) for help.

## Introductory Guide

First things you will see following installation of the are **splash screen**, and **auth screen**, namely, sign-in and/or sign-up pages.

<img src='https://res.cloudinary.com/dsvapbrsj/image/upload/c_scale,q_100,w_1619/v1722012905/Isaaaya-Blog/studyducky/AuthScreens_oh7fcq.webp' width={1000} height={500} alt='Splash and Auth Screens' />

After your authentication is completed, you will be offered to choose some interests of yours, so in the future (hopefully, near future :)) you will get personalised exercise recommendations, based on your interests. So far, the lists includes: art, music, technology, literature, sports, science, history, travel, cooking, gardening, photography, fashion, fitness, film and TV, gaming, and many more. Your interests will also be displayed on your **profile** page.

<img src='https://res.cloudinary.com/dsvapbrsj/image/upload/c_scale,q_100,w_1619/v1722013927/Isaaaya-Blog/studyducky/interests_muxaux.webp' width={1000} height={500} alt='Interests Screen' />

Shortly after, you will be able to see the list of exercises, available for you. So far, there are 10 sets of exercises on various topics, such as: basics, animals, food, home, clothes, routine, body and so on. However, only one exercise set is available for you in the beginning, namely, **“Basics”**. In order to unlock further exercise sets, you must complete previous available ones.

There is also additional tip with vocabulary available for your use before every exercise set. It presents English and Ukrainian forms of the words.

<img src='https://res.cloudinary.com/dsvapbrsj/image/upload/c_scale,q_100,w_1619/v1722023314/Isaaaya-Blog/studyducky/exercise_n_tips_page_yqe9to.webp' width={1000} height={500} alt='Exercises List and Tips Screens' />

Every exercise set consists of 10 different exercises of different types. At the moment, StudyDucky offers 3 types of exercises. **Translate**, **choose**, and **listen** exercises. Each type intends on helping users enhance translation, listening skills, and vocabulary accordingly. Please note, that in order to complete listening exercises, you need you <ins>turn off silent mode on your phone</ins>. After completing all of the exercises, you will get to know your result.

<img src='https://res.cloudinary.com/dsvapbrsj/image/upload/c_scale,q_auto:best,w_1619/v1722023317/Isaaaya-Blog/studyducky/exercises_page_gm68gp.webp' width={1000} height={500} alt='Exercises Page' />

After pressing the **Answer** button, you will get to know if your answer was correct, if not, you will get to know the actual correct answer, so you can learn.

<img src='https://res.cloudinary.com/dsvapbrsj/image/upload/c_scale,q_100,w_1619/v1722023314/Isaaaya-Blog/studyducky/exercises_success_m9vlnz.webp' width={1000} height={500} alt='Successfully Completed Exercises Page' />

You can re-complete the exercise as many times as you need for your comfortable learning experience. 

<img src='https://res.cloudinary.com/dsvapbrsj/image/upload/c_scale,q_100,w_1619/v1722023289/Isaaaya-Blog/studyducky/exercises_fail_k8tdfw.webp' width={1000} height={500} alt='Failed Exercises Page' />

In addition to the exercise sets, users can work on their vocabulary with the help of **flashcards**. StudyDucky offers various flashcards topics: basic verbs, adjectives, common phrases, IT, and so on. We plan on adding more and more topics in the future. Users also can mark flashcards as favourites, and find them in the according folder.

<img src='https://res.cloudinary.com/dsvapbrsj/image/upload/c_scale,q_100,w_1619/v1722023316/Isaaaya-Blog/studyducky/flashcards_pages_vi3qlp.webp' width={1000} height={500} alt='Flashcards Screen' />

If needed, users can create their own **custom flashcard sets** and practise with them anytime and anywhere. For that, they can press on **New set** button, and fill up the for with title of the flashcard set and its words pairs.

<img src='https://res.cloudinary.com/dsvapbrsj/image/upload/c_scale,q_100,w_1619/v1722023306/Isaaaya-Blog/studyducky/add_flashcard_zlepva.webp' width={1000} height={500} alt='Create Flashcard Set Screen' />

Grammar topics explanation also offered for users’ use both in English and Ukrainian languages. So far, the grammar section consists of the basic tenses, however, other topics are yet to come in the near future.

<img src='https://res.cloudinary.com/dsvapbrsj/image/upload/c_scale,q_100,w_1619/v1722023291/Isaaaya-Blog/studyducky/grammar_pages_1_bkre2k.jpg' width={1000} height={500} alt='Grammar Screen' />

There is also an achievement system present in the StudyDucky app. So, if users get some achievements, the according badge will be shown on their profile page (Good job! :).

<img src='https://res.cloudinary.com/dsvapbrsj/image/upload/c_scale,q_100,w_1619/v1722023290/Isaaaya-Blog/studyducky/achievements_x87cnv.webp' width={1000} height={500} alt='Achievement Screen' />

You may have noticed, that it is heavily inspired by [**Duolingo**](https://www.duolingo.com), however possesses features, that are not exactly present in the app. Please note, StudyDucky is rather <ins>a demo pet project</ins>, than an independent app, and does not intend to plagiarise any products, or receive any credits. All rights belong to the companies, that initially launched apps, that we looked up to while creating the app. StudyDucky is not for commercial use, and for, does not require any payments or whatnot.


## Technical features

For those, who are more interested in the technical side of things.The app has a quite basic architecture. It is a mobile app, stable, and available (for now) only on IOS. In the future I will be thinking about building the web version, so users do not have to download any app instances. I am not exactly sure about launching the app on Android, since, unfortunately, there is no way I can have a real, manual testing experience with it.

But back to the technical stuff. The (kind of) frontend side is created with TS and React Native (Expo, not CLI), and backend is written with NodeJS, with basic ExpressJS framework. The database used is MongoDB. The frontend is hosted with Expo Go, and backend is hosted with AWS EC2 instance. If you want to know more about the app’s implementation, keep on following the blog, as more tech articles are yet to come, including those featuring StudyDucky. If you want to share some advice, feel free to contact me.

Thank you for reading the article, I hope it was useful in any way! **Happy coding!**
