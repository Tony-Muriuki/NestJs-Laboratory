import { Injectable } from '@nestjs/common';

@Injectable()
export class TweetsService {
  tweets: { text: string; date: Date; userId: number }[] = [
    {
      text: 'Just setting up my NestJS app!',
      date: new Date('2025-01-03'),
      userId: 1,
    },
    {
      text: 'Learning dependency injection in NestJS 💉',
      date: new Date('2025-01-10'),
      userId: 1,
    },
    {
      text: 'Finally mastered controllers and providers 😎',
      date: new Date('2025-02-14'),
      userId: 2,
    },
    {
      text: 'Microservices are so cool with NATS 🚀',
      date: new Date('2025-03-02'),
      userId: 2,
    },
    {
      text: 'PostgreSQL + TypeORM = ❤️',
      date: new Date('2025-03-12'),
      userId: 3,
    },
    {
      text: 'Testing with Jest feels powerful!',
      date: new Date('2025-04-05'),
      userId: 3,
    },
    {
      text: 'Building REST APIs the clean way 🧼',
      date: new Date('2025-05-09'),
      userId: 4,
    },
    {
      text: 'Swagger docs make life so much easier 📜',
      date: new Date('2025-06-11'),
      userId: 4,
    },
    {
      text: 'Authentication with JWT — done ✅',
      date: new Date('2025-07-22'),
      userId: 5,
    },
    {
      text: 'Deployed my first NestJS app to AWS! ☁️',
      date: new Date('2025-08-19'),
      userId: 5,
    },
  ];
  //Methods

  //Get All Tweets
  getAllTweets() {
    return this.tweets;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTweets(userId: number) {
    return 100;
  }

  // Delete a specific tweet by its ID
  deleteTweet(tweetId: number) {
    const index = this.tweets.findIndex((tweet) => tweet.userId === tweetId);

    if (index === -1) {
      throw new Error(`Tweet with ID ${tweetId} not found`);
    }

    const deletedTweet = this.tweets.splice(index, 1)[0];
    return {
      message: 'Tweet deleted successfully',
      deletedTweet,
    };
  }
}
