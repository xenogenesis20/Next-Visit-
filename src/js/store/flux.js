const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userInfo: [],
			allUserMedications: [
				{
					id: 1357,
					name: "Aspirin",
					dose: "a lot",
					frequency: "too often",
					reason: "for fun",
					sideEffects: "madness and death"
				},
				{
					id: 1359,
					name: "Morphine",
					dose: "sufficient",
					frequency: "not often enough",
					reason: "for more fun",
					sideEffects: "awesomness"
				}
			],
			vitalHeartRate: [
				{ date: "2021-07-31", id: 0, value: 65.25, vitalName: "Heart Rate" },
				{ date: "2021-07-15", id: 0, value: 65.35, vitalName: "Heart Rate" },
				{ date: "2021-07-01", id: 0, value: 65.4, vitalName: "Heart Rate" }
			],
			vitalHeight: [
				{ date: "2021-07-31", id: 0, value: 65.25, vitalName: "Height" },
				{ date: "2021-07-15", id: 0, value: 65.35, vitalName: "Height" },
				{ date: "2021-07-01", id: 0, value: 65.4, vitalName: "Height" }
			],

			vitalBloodPressure: [
				{ date: "2021-07-31", id: 0, value: "120/80", vitalName: "Blood Pressure" },
				{ date: "2021-07-15", id: 0, value: "120/90", vitalName: "Blood Pressure" },
				{ date: "2021-07-01", id: 0, value: "100/80", vitalName: "Blood Pressure" }
			],
			vitalWeight: [
				{ date: "2021-07-31", id: 0, value: 200, vitalName: "Weight" },
				{ date: "2021-07-15", id: 0, value: 150, vitalName: "Weight" },
				{ date: "2021-07-01", id: 0, value: 100, vitalName: "Weight" }
			],
			allUserVitals: [{}],

			allUserSymptoms: [
				{
					id: 123124,
					symptomName: "broken butt",
					startDate: "07/12/21",
					severity: "10",
					location: "butt",
					frequency: "constant",
					duration: "all day",
					notes: []
				}
			],
			allUserVitals: [],
			allVisits: [],
			allDoctors: [
				{
					name: "George Mihov",
					specialty: "Cardiologist",
					id: "1"
				},
				{
					name: "Pedro Cisternas",
					specialty: "Sports Medicine",
					id: "2"
				},
				{
					name: "Nate Archer",
					specialty: "Pulmonologist",
					id: "3"
				},
				{
					name: "Antoniya Anemtserova",
					specialty: "Psychiatrist",
					id: "4"
				}
			]
		},
		actions: {
			// sortVitals: (key, value) => {
			// 	let newVitalsArray = getStore().allUserVitals;
			// 	return newVitalsArray.filter(vital => {
			// 		if (key == "Vital Name") return vital.vitalName == value;
			// 		else if (key == "Date") return vital.date == value;
			// 	});
			// },
			// sortVitalsByDate: () => {},
			sortVitals: (key, value) => {
				let newVitalsArray = getStore().allUserVitals;
				return newVitalsArray.filter(vital => {
					if (key == "Vital Name") return vital.vitalName == value;
					else if (key == "Date") return vital.date == value;
				});
			},
			addVisit: visitDetails => {
				var nextVisit = getStore().nextVisit;
				nextVisit.push(visitDetails);
				setStore({ nextVisit: nextVisit });
			},
			sortVitalsByDate: () => {},
			addUser: user => {
				let newUser = getStore().userInfo;
				newUser.push(user);

				setStore({ userInfo: newUser });
			},
			addUserMedication: medication => {
				let allMedications = getStore().allUserMedications;
				allMedications.push(medication);
				setStore({ allUserMedications: allMedications });
			},
			editUserMedication: medication => {
				let allMeds = getStore().allUserMedications;
				for (let i = 0; i < allMeds.length; i++) {
					if (medication.id == allMeds[i].id) {
						allMeds[i] = medication;
						console.log(medication.id);
					}
				}
				setStore({ allUserMedications: allMeds });
			},
			deleteUserMedication: id => {
				let allMeds = getStore().allUserMedications;
				let newMedList = allMeds.filter(med => id != med.id);
				setStore({ allUserMedications: newMedList });
			},
			addUserSymptom: symptom => {
				let allSymptoms = getStore().allUserSymptoms;
				allSymptoms.push(symptom);
				setStore({ allUserSymptoms: allSymptoms });
			},
			editUserSymptom: symptom => {
				let allSymps = getStore().allUserSymptoms;
				for (let i = 0; i < allSymps.length; i++) {
					if (symptom.id == allSymps[i].id) {
						allSymps[i] = symptom;
						console.log(symptom.id);
					}
				}
				setStore({ allUserSymptoms: allSymps });
			},
			addSymptomNote: (id, note) => {
				let allSymps = getStore().allUserSymptoms;
				for (let i = 0; i < allSymps.length; i++) {
					if (id == allSymps[i].id) {
						allSymps[i].notes.push(note);
						// console.log(allSymps[i]);
					}
				}
				setStore({ allUserSymptoms: allSymps });
			},

			deleteSymptomNote: (pos, notePos) => {
				let allSymp = getStore().allUserSymptoms;
				// let newSympList = allSymp.filter((symp, index) => {
				// 	console.log(symp.notes[notePos].id);
				// 	console.log(allSymp[pos].notes[notePos].id);
				// 	symp.notes[notePos].id != allSymp[pos].notes[notePos].id;
				// });
				allSymp[pos].notes.splice(notePos, 1);
				// console.log(allSymp[pos].notes[notePos].id);
				setStore({ allUserSymptoms: allSymp });
			},
			deleteUserSymptom: id => {
				let allSymp = getStore().allUserSymptoms;
				let newSympList = allSymp.filter(symp => id != symp.id);
				setStore({ allUserSymptoms: newSympList });
			},
			addUserVital: vital => {
				let allVitals = getStore().allUserVitals;
				allVitals.push(vital);
				setStore({ allUserVitals: allVitals });
			},
			sortVital: array => {
				var sortedVitals = array.sort((a, b) => {
					return new Date(b.date) - new Date(a.date);
				});
				return sortedVitals;
			},
			addUserVital: vital => {
				if (vital.vitalName == "Blood Pressure") {
					let vitals = getStore().vitalBloodPressure;
					let newVitals = getActions().sortVital([...vitals, vital]);
					setStore({ vitalBloodPressure: newVitals });
				} else if (vital.vitalName == "Weight") {
					let vitals = getStore().vitalWeight;
					let newVitals = getActions().sortVital([...vitals, vital]);
					setStore({ vitalWeight: newVitals });
				} else if (vital.vitalName == "Heart Rate") {
					let vitals = getStore().vitalHeartRate;
					let newVitals = getActions().sortVital([...vitals, vital]);
					setStore({ vitalHeartRate: newVitals });
				} else if (vital.vitalName == "Height") {
					let vitals = getStore().vitalHeight;
					let newVitals = getActions().sortVital([...vitals, vital]);
					setStore({ vitalHeight: newVitals });
				}
			},

			editUserVital: vital => {
				let allVitals = getStore().allUserVitals;
				for (let i = 0; i < allVitals.length; i++) {
					if (vital.id == allVitals[i].id) {
						allVitals[i] = vital;
						console.log(vital.id);
					}
				}
				setStore({ allUserVitals: allVitals });
			},
			deleteUserVital: id => {
				let allVitals = getStore().allUserVitals;
				let newVitalList = allVitals.filter(vital => id != vital.id);
				setStore({ allUserVitals: newVitalList });
			},
			addVisit: visitDetails => {
				var nextVisit = getStore().allVisits;
				nextVisit.push(visitDetails);
				setStore({ allVisits: nextVisit });
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
