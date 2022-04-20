export default function downloadJSONFile(jsonData: any, fileName: string) {
	localStorage.setItem("@firebolt-latest-JSON", JSON.stringify(jsonData));

	let dataStr = JSON.stringify(jsonData);
	let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

	let linkElement = document.createElement('a');
	linkElement.setAttribute('href', dataUri);
	linkElement.setAttribute('download', fileName);
	linkElement.click();
}