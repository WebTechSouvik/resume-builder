import React, { useEffect } from "react";
import Template1 from "./Template1";
import { useState, useRef } from "react";
import { createRoot } from "react-dom/client";


const Resume = ({ children }) => {
	const [pages, setPages] = useState([]);
	const contentRef = useRef();
	const pngRef=useRef()



	useEffect(() => {
		(async () => {
			const leftChildrenContent = children.props.children[0];
			const rightChildrenContent = children.props.children[1];
			let leftCurrentContent = [];
			let rightCurrentContent = [];
			let leftFisrtPage = [];
			let leftSecondPage = [];
			let rightFisrtPage = [];
			let rightSecondPage = [];
			let leftCurrentHeight = 0;
			let rightCurrentHeight = 0;
			const maxHeight = 900;
			const leftheight = await getElementHeight(leftChildrenContent);
			const rightHeght = await getElementHeight(rightChildrenContent);

			console.log(leftheight, rightHeght);
			if (leftheight > maxHeight && rightHeght < maxHeight) {
				const leftArray = React.Children.toArray(
					leftChildrenContent.props.children,
				);

				for (let i = 0; i < leftArray.length; i++) {
					const height = await getElementHeight(leftArray[i]);
					if (leftCurrentHeight + height > maxHeight) {
						leftFisrtPage = leftCurrentContent;
						leftCurrentContent = [leftArray[i]];
						leftCurrentHeight = height;
					} else {
						leftCurrentContent.push(leftArray[i]);
						leftCurrentHeight += height;
					}
				}
				//checked each nested components
				setPages([
					<Template1 no={0}>
						<div className="col-span-2 min-h-full bg-gray-500">
							{leftFisrtPage}
						</div>
						{rightChildrenContent}
					</Template1>,
					<Template1 no={1}>
						<div className="col-span-2 min-h-full bg-gray-500">
							{leftCurrentContent}
						</div>
					</Template1>,
				]);
			} else if (leftheight < maxHeight && rightHeght > maxHeight) {
				const rightArray = React.Children.toArray(
					rightChildrenContent.props.children,
				);
				console.log(rightArray);

				for (let i = 0; i < rightArray.length; i++) {
					const height = await getElementHeight(rightArray[i]);
					if (rightCurrentHeight + height > maxHeight) {
						rightFisrtPage = rightCurrentContent;
						rightCurrentContent = [rightArray[i]];
						rightCurrentHeight = height;
					} else {
						rightCurrentContent.push(rightArray[i]);
						rightCurrentHeight += height;
					}
				}
				console.log(rightFisrtPage, rightCurrentContent);
				setPages([
					<Template1 no={0}>
						{leftChildrenContent}
						<div className="max-h-full col-span-4 pb-3">
							{rightFisrtPage}
						</div>
					</Template1>,
					<Template1 no={1}>
						<div className="col-span-2 min-h-full bg-gray-500"></div>
						<div className="max-h-full col-span-4 pb-3">
							{rightCurrentContent}
						</div>
					</Template1>,
				]);
			} else if (leftheight > maxHeight && rightHeght > maxHeight) {
				const rightArray = React.Children.toArray(
					rightChildrenContent.props.children,
				);
				const leftArray = React.Children.toArray(
					leftChildrenContent.props.children,
				);
				for (let i = 0; i < leftArray.length; i++) {
					const height = await getElementHeight(leftArray[i]);
					if (leftCurrentHeight + height > maxHeight) {
						leftFisrtPage = leftCurrentContent;
						leftCurrentContent = [leftArray[i]];
						leftCurrentHeight = height;
					} else {
						leftCurrentContent.push(leftArray[i]);
						leftCurrentHeight += height;
					}
				}

				for (let i = 0; i < rightArray.length; i++) {
					const height = await getElementHeight(rightArray[i]);
					if (leftCurrentHeight + height > maxHeight) {
						rightFisrtPage = rightCurrentContent;
						rightCurrentContent = [rightArray[i]];
						rightCurrentHeight = height;
					} else {
						rightCurrentContent.push(rightArray[i]);
						rightCurrentHeight += height;
					}
				}

				setPages([
					<Template1 no={0}>
						<div className="col-span-2 min-h-full bg-gray-500">
							{leftFisrtPage}
						</div>
						<div className="max-h-full col-span-4 pb-3">
							{rightFisrtPage}
						</div>
					</Template1>,
					<Template1 no={1}>
						<div className="col-span-2 min-h-full bg-gray-500">
							{leftCurrentContent}
						</div>
						<div className="max-h-full col-span-4 pb-3">
							{rightCurrentContent}
						</div>
					</Template1>,
				]);
			} else {
				// console.log("hi1")
				setPages([<Template1 no={0}>{children}</Template1>]);
			}
		})();
	}, [children]);

	const getElementHeight = async (child) => {
		// console.log(child)
		const clonedChild = React.cloneElement(child, { ref: contentRef });
		// Temporarily render the element to measure its height
		const div = document.createElement("div");
		div.style.position = "absolute"; // Ensure it's not affecting layout
		div.style.visibility = "hidden"; // Hide it visually
		div.style.height = "auto";
		div.style.width = "210mm";
		document.body.appendChild(div);

		const root = createRoot(div); // Use createRoot from React 18
		root.render(clonedChild);

		await new Promise((resolve, reject) => {
			setTimeout(resolve, 100);
		});

		const childHeight = div.getBoundingClientRect().height;

		document.body.removeChild(div);

		return childHeight;
	};

	return (
		<div className="relative">
			
			{pages.map((page) => page)}
		</div>
	);
};

export default Resume;
