export default {
	germanMonths: {
		0: "Januar",
		1: "Februar", 
		2: "März",
		3: "April",
		4: "Mai",
		5: "Juni",
		6: "Juli",
		7: "August",
		8: "September",
		9: "Oktober",
		10: "November",
		11: "Dezember"
	},

	getCurrentMonth() {
		return this.germanMonths[new Date().getMonth()];
	},
	getLastMonth() {
		const lastMonthIndex = new Date().getMonth() -1;
		return this.germanMonths[lastMonthIndex < 0 ? 11 : lastMonthIndex];
	},
	getSecoundLastMonth() {
		const secondLastMonthIndex = new Date().getMonth() - 2;
		return this.germanMonths[secondLastMonthIndex < 0 ? secondLastMonthIndex + 12 : secondLastMonthIndex];
	},
};