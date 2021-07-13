const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userInfo: [],
			allUserMedications: [],
			allUserSymptoms: [
				{
					id: 2,
					symptomName: "broken butt",
					startDate: "07/12/21",
					severity: "10",
					location: "butt",
					frequency: "constant",
					duration: "all day",
					notes: [{ date: "", note: "", severity: "" }]
				}
			],
			allUserVitals: [],
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
					}
				}
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
