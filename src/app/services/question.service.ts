import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Question } from '../models/question.interface';

@Injectable({
	providedIn: 'root'
})
export class QuestionService {

	constructor(
		private afs: AngularFirestore
	) { }

	addNewQuestion(question: Question) {
		return this.afs.collection('questions').add(question);
	}

	getAllQuestion() {
		return this.afs.collection<Question>('questions', ref => ref.orderBy('timestamp', 'desc').limit(5)).valueChanges();
	}
}
