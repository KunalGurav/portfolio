import {Injectable} from '@angular/core';
import {Feedback} from './feedback.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) {
  }

  getAllFeedback() {
    // return this.firestore.collection('feedback').snapshotChanges();
    return this.http.get<any>('https://my-portfolio-kunalgurav-default-rtdb.firebaseio.com/feedbacks.json').pipe(
      map(response => {
          const feedbackList: Feedback[] = [];
          if (response) {
          for (const key of Object.keys(response)) {
            const feedback: Feedback = {
              id: key,
              createdAt: response[key].createdAt,
              email: response[key].email,
              message: response[key].message,
              name: response[key].name,
              subject: response[key].subject
            };
            feedbackList.push(feedback);
          }
          // feedbackList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
          return feedbackList;
      })
    );
  }

  addNewFeedback(feedback: Feedback) {
    // return this.firestore.collection('feedback').add(feedback);
    return this.http.post('https://my-portfolio-kunalgurav-default-rtdb.firebaseio.com/feedbacks.json', feedback).pipe(
      map(response => {
        console.log(response);
        return response;
      })
    );
  }

  deleteFeedback(id: string) {
    // this.firestore.doc('feedback/' + id).delete();
    return this.http.delete(`https://my-portfolio-kunalgurav-default-rtdb.firebaseio.com/feedbacks/${id}.json`);
  }
}
