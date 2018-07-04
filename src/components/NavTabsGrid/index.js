import _ from 'lodash';
import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import style from './NavTabsGrid.css';

/**
 * Non-responsive grid-layout. Contains a generate layout
 * function. 
 */
class NavTabsGrid extends Component {

	renderLayout(styles, layout) {
		return _.map(_.range(97, 97 + layout.length), function(i) {
			var genKey = String.fromCharCode(i);
			return (
				<div key={genKey} className={styles.itemDiv}>
					<p className={styles.itemText}>{genKey}</p>
				</div>
			);
		});
	}

	/**
	 * 
	 * @param {*} length Number of objects to be placed in the layout array. 
	 * @param {*} keyType Determine how the key is generated, whether numerically
	 * 						or alphabetically.
	 * @param {*} setup Choose the grid type. Choices are 3x3, 4x4. 
	 */
	genLayout(length, keyType, setup) {	
		if (keyType === "string") {
			return _.map(_.range(0, length), function(index) {
				var genKey = String.fromCharCode(97 + index);
				return {i: genKey, x: 0, y: 0, w: 2, h: 2, maxW: 4, mayY: 4};
			});
		} else if (keyType === "number") {
			return _.map(_.range(0, length), function(index) {
				return {i: index, x: 0, y: 0, w: 2, h: 2, maxW: 4, mayY: 4};
			});
		}
	}
	
	render() {
		var layout = this.genLayout(26, "number");
		
		return(
			<GridLayout className="layout" layout={layout} cols={12}
			rowHeight={30} width={1200}>
				{this.renderLayout(style, layout)}
			</GridLayout>
		); 
	}
}

export default NavTabsGrid;