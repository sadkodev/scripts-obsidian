console.log("Is working...")

let categoriesNotes = ['dev', 'des', 'arch', 'note']
let path = '/templates/languages/'

let notesInfo = [
	{
		dev: {
			title: 'dev',
			alias: `['IT', 'Information Technology']`,
			status: 'normal',
			date: '2023',
			template: `[[${path}/development]]`
		}
	},
	{
		des: {
			title: 'des',
			alias: `['UX/UI', 'User Experience & User Interface']`,
			status: 'normal',
			date: '2023',
			template: `[[${path}/design]]`
		}
	},
	{
		arch: {
			title: 'arch',
			alias: `['KISS', 'Keep it simple stupid']`,
			status: 'normal',
			date: '2023',
			template: `[[${path}/archlinux]]`
		}
	},
	{
		note: {
			title: 'note',
			alias: `['Sadkodev','Personnel file']`,
			status: 'normal',
			date: '2023',
			template: `[[${path}/notes]]`
		}
	}
]

let title = 'arch-title'
let metaNote = []
let result

for (const category of categoriesNotes) {
	let metaData
	if (title.startsWith(category)) {
		metaData = notesInfo.filter(note => note[category])
		metaNote.push(metaData[0][category])
	}
}
let metaData = {
	lineStart: '---\n',
	title: `title: '${metaNote[0].title}'\n`,
	alias: `alias: ${metaNote[0].alias}\n`,
	date: `date: '${metaNote[0].date}'\n`,
	template: `template: ${metaNote[0].template}\n`,
	lineEnd: '---'
}

let resultData = []
for (let meta in metaData){
	console.log(metaData[meta])
}
