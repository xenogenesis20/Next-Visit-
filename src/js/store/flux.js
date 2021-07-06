const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userInfo: [],
			allUserMedications: [],
			allUserSymptoms: [],
			allUserVitals: []
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
				console.log(medication);
				setStore({ allUserMedications: allMeds });
			},
			addUserSymptom: symptom => {
				let allSymptoms = getStore().allUserSymptoms;
				allSymptoms.push(symptom);
				setStore({ allUserSymptoms: allSymptoms });
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
