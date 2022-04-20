export default function downloadJSONFile(jsonData: any) {
	localStorage.setItem("@firebolt-latest-JSON", JSON.stringify(jsonData));

	let dataStr = JSON.stringify(jsonData);
	let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

	let exportFileDefaultName = 'data.json';

	let linkElement = document.createElement('a');
	linkElement.setAttribute('href', dataUri);
	linkElement.setAttribute('download', exportFileDefaultName);
	linkElement.click();
}