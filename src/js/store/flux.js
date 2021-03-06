const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// apiAddress: "https://3000-scarlet-cicada-21qc8m3c.ws-us14.gitpod.io",
			apiAddress: "https://next-visit-back-end.herokuapp.com/",
			// apiAddress: "https://3000-plum-sturgeon-mlykhiq2.ws-us13.gitpod.io",
			endpoint: "",
			userInfo: [],
			allUserMedications: [
				{
					id: 1357,
					name: "Aspirin",
					dose: "100 mg",
					frequency: "too often",
					reason: "for fun",
					sideEffects: "madness and death"
				},
				{
					id: 1359,
					name: "Morphine",
					dose: "200 mg",
					frequency: "not often enough",
					reason: "for more fun",
					sideEffects: "awesomness"
				}
			],
			vitalHeartRate: [
				// { date: "2021-07-31", id: 0, value: 65.25, vitalName: "Heart Rate" },
				// { date: "2021-07-15", id: 0, value: 65.35, vitalName: "Heart Rate" },
				// { date: "2021-07-01", id: 0, value: 65.4, vitalName: "Heart Rate" }
			],
			vitalHeight: [
				// { date: "2021-07-31", id: 0, value: 65.25, vitalName: "Height" },
				// { date: "2021-07-15", id: 0, value: 65.35, vitalName: "Height" },
				// { date: "2021-07-01", id: 0, value: 65.4, vitalName: "Height" }
			],

			vitalBloodPressure: [
				// { date: "2021-07-31", id: 0, value: "120/80", vitalName: "Blood Pressure" },
				// { date: "2021-07-15", id: 0, value: "120/90", vitalName: "Blood Pressure" },
				// { date: "2021-07-01", id: 0, value: "100/80", vitalName: "Blood Pressure" }
			],
			vitalWeight: [
				// { date: "2021-07-31", id: 0, value: 200, vitalName: "Weight" },
				// { date: "2021-07-15", id: 0, value: 150, vitalName: "Weight" },
				// { date: "2021-07-01", id: 0, value: 100, vitalName: "Weight" }
			],

			allUserSymptoms: [
				// {
				// 	id: 123124,
				// 	symptomName: "Heart palpitations",
				// 	startDate: "07/12/21",
				// 	severity: "10",
				// 	location: "chest",
				// 	frequency: "constant",
				// 	duration: "all day",
				// 	notes: []
				// },
				// {
				// 	id: 323124,
				// 	symptomName: "Migrane",
				// 	startDate: "09/12/21",
				// 	severity: "8",
				// 	location: "head",
				// 	frequency: "constant",
				// 	duration: "all day",
				// 	notes: []
				// }
			],
			allUserVitals: [],
			allVisits: [
				{
					id: 0,
					doctor: "Hannibal Lector",
					date: "12/02/2021",
					time: "9:45 AM",
					symptoms: [
						{
							id: 123124,
							symptomName: "Seizures",
							startDate: "07/12/21",
							severity: "10",
							location: "entire body",
							frequency: "1 per month",
							duration: "Under 1 minute",
							notes: [{ date: "08/02/2021", description: "Getting better" }]
						}
					],
					meds: [
						{
							dose: "24mg",
							frequency: "often",
							id: 2,
							name: "ZOCOR (Oral Pill)",
							reason: "Bad reasons",
							side_effects: "Terrifying"
						}
					],
					vitals: []
				}
			],
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
			setUserData: data => {
				setStore({ allUserSymptoms: data.symptoms });
				setStore({ vitalBloodPressure: data.vitals.blood_pressure });
				setStore({ vitalHeartRate: data.vitals.heart_rate });
				setStore({ vitalHeight: data.vitals.height });
				setStore({ vitalWeight: data.vitals.weight });

				setStore({ allUserMedications: data.medications });
			},
			registerNewUser: user => {
				fetch(getStore().apiAddress + "/user", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(user)
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			sortVitals: (key, value) => {
				let newVitalsArray = getStore().allUserVitals;
				return newVitalsArray.filter(vital => {
					if (key == "Vital Name") return vital.vitalName == value;
					else if (key == "Date") return vital.date == value;
				});
			},
			addVisit: (doctorName, date, time, sympList, medList, vitalList) => {
				var visits = getStore().allVisits;
				var newVitals = [];
				for (let vital of getStore().vitalHeartRate) {
					if (vitalList.includes(vital.vitalName)) newVitals.push(vital);
				}
				for (let vital of getStore().vitalHeight) {
					if (vitalList.includes(vital.vitalName)) newVitals.push(vital);
				}
				for (let vital of getStore().vitalBloodPressure) {
					if (vitalList.includes(vital.vitalName)) newVitals.push(vital);
				}
				for (let vital of getStore().vitalWeight) {
					if (vitalList.includes(vital.vitalName)) newVitals.push(vital);
				}
				var newVisit = {
					id: getStore().allVisits.length,
					doctor: doctorName,
					date: date,
					time: time,
					symptoms: sympList,
					meds: medList,
					vitals: newVitals
				};
				visits.push(newVisit);
				setStore({ allVisits: visits });
			},
			sortVitalsByDate: () => {},
			addUser: user => {
				let newUser = getStore().userInfo;
				newUser.push(user);

				setStore({ userInfo: newUser });
			},
			// addUserMedication: medication => {
			// 	let allMedications = getStore().allUserMedications;
			// 	allMedications.push(medication);
			// 	setStore({ allUserMedications: allMedications });
			// },
			addUserMedication: medication => {
				fetch(getStore().apiAddress + `/${sessionStorage.getItem("user")}/` + "medication", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(medication)
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
						setStore({ allUserMedications: responseAsJson });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
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
			// deleteUserMedication: id => {
			// 	let allMeds = getStore().allUserMedications;
			// 	let newMedList = allMeds.filter(med => id != med.id);
			// 	setStore({ allUserMedications: newMedList });
			// },
			deleteUserMedication: id => {
				fetch(getStore().apiAddress + `/${sessionStorage.getItem("user")}/medication/` + id, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
						setStore({ allUserMedications: responseAsJson });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			addUserSymptom: symptom => {
				// let allSymptoms = getStore().allUserSymptoms;
				// allSymptoms.push(symptom);
				// setStore({ allUserSymptoms: allSymptoms });
				console.log(sessionStorage.getItem("user"));
				fetch(getStore().apiAddress + `/${sessionStorage.getItem("user")}/` + "symptom", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(symptom)
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
						setStore({ allUserSymptoms: responseAsJson });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
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
			addSymptomNote: (id, note) => {
				fetch(getStore().apiAddress + `/${sessionStorage.getItem("user")}/` + id + "/note", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(note)
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log("Symptom Note Response:", responseAsJson);
						setStore({ allUserSymptoms: responseAsJson });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
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
			// deleteUserSymptom: id => {
			// 	let allSymp = getStore().allUserSymptoms;
			// 	let newSympList = allSymp.filter(symp => id != symp.id);
			// 	setStore({ allUserSymptoms: newSympList });
			// },
			deleteUserSymptom: id => {
				fetch(getStore().apiAddress + `/${sessionStorage.getItem("user")}/symptom/` + id, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
						setStore({ allUserSymptoms: responseAsJson });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			// addUserVital: vital => {
			// 	let allVitals = getStore().allUserVitals;
			// 	allVitals.push(vital);
			// 	setStore({ allUserVitals: allVitals });
			// },
			sortVital: array => {
				var sortedVitals = array.sort((a, b) => {
					return new Date(b.date) - new Date(a.date);
				});
				return sortedVitals;
			},
			addUserVital: vital => {
				// fetch(getStore().apiAddress + `/Georgi/` + "vital", {
				fetch(getStore().apiAddress + `/${sessionStorage.getItem("user")}/` + "vital", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(vital)
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(updatedVital) {
						console.log("Vital Response:", updatedVital);
						if (vital.vitalName == "Blood Pressure") {
							setStore({ vitalBloodPressure: [...getStore().vitalBloodPressure, vital] });
						} else if (vital.vitalName == "Weight") {
							setStore({ vitalWeight: [...getStore().vitalWeight, vital] });
						} else if (vital.vitalName == "Heart Rate") {
							setStore({ vitalHeartRate: [...getStore().vitalHeartRate, vital] });
						} else if (vital.vitalName == "Height") {
							setStore({ vitalHeight: [...getStore().vitalHeight, vital] });
						}
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
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
			// deleteUserVital: id => {
			// 	let allVitals = getStore().allUserVitals;
			// 	let newVitalList = allVitals.filter(vital => id != vital.id);
			// 	setStore({ allUserVitals: newVitalList });
			// },
			deleteUserVital: id => {
				fetch(getStore().apiAddress + `/${sessionStorage.getItem("user")}/vital/` + id, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
						if (responseAsJson[0].vital_name == "Blood Pressure") {
							setStore({ vitalBloodPressure: responseAsJson });
						} else if (responseAsJson[0].vital_name == "Weight") {
							setStore({ vitalWeight: responseAsJson });
						} else if (responseAsJson[0].vital_name == "Heart Rate") {
							setStore({ vitalHeartRate: responseAsJson });
						} else if (responseAsJson[0].vital_name == "Height") {
							setStore({ vitalHeight: responseAsJson });
						}
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
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
			},

			// get_auth: (username, password) => {
			// 	// retrieve token form localStorage
			// 	const token = localStorage.getItem("jwt-token");

			// 	fetch(getStore().apiAddress + "/auth", {
			// 		method: "GET",
			// 		headers: { Authorization: "Bearer " + token } // ??? authorization token
			// 	})
			// 		.then(resp => {
			// 			if (resp.ok) resp.json();
			// 			else if (resp.status === 403) {
			// 				console.log("Missing or invalid token");
			// 			} else {
			// 				throw Error("Unknown error");
			// 			}
			// 		})
			// 		.then(data => {
			// 			// success
			// 			console.log("This is the data your requested", data);
			// 		})
			// 		.catch(error => console.error("There has been an uknown error", error));
			// },
			addToVitals: (
				vital_name,
				date = request_body["date"],
				value = request_body["value"],
				username = username
			) => {
				let endpoint = "";
				if (entity_type == "person") {
					endpoint = "/favorite/person/";
				} else {
					endpoint = "/favorite/planet/";
				}
				fetch(getStore().apiAddress + endpoint + entity_id, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						entity_name: entity_name,
						username: getStore().user
					})
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseJson);

						setStore({ favorites: responseJson.favorites });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}
		}
	};
};

export default getState;
