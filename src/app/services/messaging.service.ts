import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
	providedIn: 'root'
})
export class MessagingService {

	messaging = firebase.messaging();
	currentMessage = new BehaviorSubject(null);

	constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) { }


	updateToken(token) {
		this.db.doc(`tokens/${token}`).set({ token: token }, { merge: true });
	}

	getPermission() {
		this.messaging.requestPermission()
			.then(() => {
				console.log('Notification permission granted.');
				return this.messaging.getToken();
			})
			.then(token => {
				this.updateToken(token);
			})
			.catch((err) => {
				console.log('Unable to get permission to notify.', err);
			});
	}

	receiveMessage() {
		this.messaging.onMessage((payload) => {
			this.currentMessage.next(payload.notification);
		});

	}
}
