const dropdownBtn = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("panel");

const arrowButtons = document.querySelectorAll(".arrowButton");
const headers = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");

for (const header of headers) {
	header.addEventListener("click", () => {
		const accordionItem = header.parentElement;
		const accordionContent = accordionItem.querySelector(".accordion-content");

		header.style.color = "black";

		accordionContent.classList.toggle("active");

		if (accordionContent.classList.contains("active")) {
			accordionContent.style.maxHeight = `${
				accordionContent.scrollHeight + 100
			}px`;
		} else {
			header.style.color = "gray";
			accordionContent.style.maxHeight = "0";
		}
	});
}

dropdownBtn.addEventListener("click", (e) => {
	e.stopPropagation();
	toggleDropdown();
});

const toggleDropdown = () => {
	dropdownMenu.classList.toggle("show");
};

const viewAllButton = document.querySelector(".view-all-checkbox");
const hiddenCheckboxes = document.querySelectorAll("#extralabel");

viewAllButton.addEventListener("click", () => viewButtonLogic());

function viewButtonLogic() {
	for (const hc of hiddenCheckboxes) {
		hc.style.display = hc.style.display === "block" ? "none" : "block";
	}

	if (viewAllButton.innerHTML === "View all...") {
		viewAllButton.innerHTML = "View less...";
	} else {
		viewAllButton.innerHTML = "View all...";
	}
}

const clearAll = document.querySelector(".clear-all");
const checkboxes = document.querySelectorAll(".checkbox");

clearAll.addEventListener("click", () => uncheckBoxes());

function uncheckBoxes() {
	for (const checkbox of checkboxes) {
		checkbox.checked = false;
	}
}

const saveView = document.querySelector(".save-view");

saveView.addEventListener("click", () => {
	const selectedFilters = [];
	for (const checkbox of checkboxes) {
		if (checkbox.checked) {
			selectedFilters.push(checkbox.parentElement.textContent.trim());
		}
	}

	console.log("Selected Filters:", selectedFilters);

	dropdownMenu.classList.remove("show");

	uncheckBoxes();

	for (const header of headers) {
		const accordionItem = header.parentElement;
		const accordionContent = accordionItem.querySelector(".accordion-content");
		header.style.color = "gray";
		accordionContent.classList.remove("active");
	}
	if (viewAllButton.innerHTML === "View less...") {
		viewButtonLogic();
	}
});
