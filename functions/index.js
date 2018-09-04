const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();

exports.sendNotification = functions.firestore
	.document('questions/{quesID}')
	.onCreate((snap, context) => {
		// Get an object representing the document
		// e.g. {'name': 'Marie', 'age': 66}
		const newValue = snap.data();

		const payload = {
			notification: {
				title: 'New Question Submitted!',
				body: newValue.question,
			}
		};

		// ref to the device collection for the user
		const db = admin.firestore()
		const devicesRef = db.collection('tokens');

		// get the user's tokens and send notifications
		// const devices = await devicesRef.get();

		return devicesRef.get()
			.then(devices => {
				const tokens = [];
				devices.forEach(result => {
					const token = result.data().token;

					tokens.push(token)
				});

				return tokens;
			})
			.then(tokens => admin.messaging().sendToDevice(tokens, payload))
			.catch(error => console.error(error));
	});