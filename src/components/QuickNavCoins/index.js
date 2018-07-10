import _ from 'lodash';
import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../QuickNavCoins/QuickNavCoins.css';

class QuickNavCoins extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab : '1'
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

	render() {

		const activeTabStyle = {
			color: 'red !important'
		};
		var layout = [
			{i: 'a', x: 0, y: 0, w: 9, h: 3}
		];
		return(
			<section className="navbar-coins">
				<div className="quick-nav-coins">
					<GridLayout className="nav-layout" cols={12} rowHeight={30} width={1200}
					layout={layout}>
						<div key="a">
							<header>
								<Nav tabs>
									<NavItem style={activeTabStyle}>
										<NavLink 
											className={classnames({ active: this.state.activeTab === '1'})}
											onClick={() => {this.toggle('1')}}
										>
											Carvana
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className={classnames({active: this.state.activeTab === '2'})}
												onClick={ () => {this.toggle('2')}}>
												Cardano
											</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className={classnames({active: this.state.activeTab === '3'})}
											onClick={ () => {this.toggle('3')}}>
											Bitcoin Cash
									</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className={classnames({active: this.state.activeTab === '4'})}
												onClick={ () => {this.toggle('4')}}>
											EOS Token
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className={classnames({active: this.state.activeTab === '5'})}
												onClick={ () => {this.toggle('5')}}>
											Ethereum
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className={classnames({active: this.state.activeTab === '6'})}
												onClick={ () => {this.toggle('6')}}>
											Litecoin
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className={classnames({active: this.state.activeTab === '7'})}
												onClick={ () => {this.toggle('7')}}>
											Tron
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className={classnames({active: this.state.activeTab === '2'})}
												onClick={ () => {this.toggle('2')}}>
											Rippple
										</NavLink>
									</NavItem>
								</Nav>
							</header>

							<TabContent activeTab={this.state.activeTab}>
								<TabPane tabId="1">
									<Row>
										<Col sm="12">
											<span>
												<span>0 </span>
												<span>Sep 28 </span>
												<span>(20x) </span>
												<span className="coinInfo">0.000000215 </span>
											</span>
										</Col>
									</Row>
								</TabPane>
								<TabPane tabId="2">
									<Row>
										<Col sm="12">
											<span>
												<span>0 </span>
												<span>Sep 28 </span>
												<span>(20x) </span>
												<span className="coinInfo">0.000000215 </span>
											</span>
										</Col>
									</Row>
								</TabPane>
								<TabPane tabId="3">
									<Row>
										<Col sm="12">
											<span>
												<span>0 </span>
												<span>Sep 28 </span>
												<span>(20x) </span>
												<span className="coinInfo">0.000000215 </span>
											</span>
										</Col>
									</Row>
								</TabPane>
								<TabPane tabId="4">
									<Row>
										<Col sm="12">
											<span>
												<span>0 </span>
												<span>Sep 28 </span>
												<span>(20x) </span>
												<span className="coinInfo">0.000000215 </span>
											</span>
										</Col>
									</Row>
								</TabPane>
								<TabPane tabId="5">
									<Row>
										<Col sm="12">
											<span>
												<span>0 </span>
												<span>Sep 28 </span>
												<span>(20x) </span>
												<span className="coinInfo">0.000000215 </span>
											</span>
										</Col>
									</Row>
								</TabPane>
								<TabPane tabId="6">
									<Row>
										<Col sm="12">
											<span>
												<span>0 </span>
												<span>Sep 28 </span>
												<span>(20x) </span>
												<span className="coinInfo">0.000000215 </span>
											</span>
										</Col>
									</Row>
								</TabPane>
								<TabPane tabId="7">
									<Row>
										<Col sm="12">
											<span>
												<span>0 </span>
												<span>Sep 28 </span>
												<span>(20x) </span>
												<span className="coinInfo">0.000000215 </span>
											</span>
										</Col>
									</Row>
								</TabPane>
							</TabContent>
						</div>
					</GridLayout>
				</div>
			</section>
		);
	}
}

// import React from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
// import classnames from 'classnames';

// class QuickNavCoins extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       activeTab: '1'
//     };
//   }

//   toggle(tab) {
//     if (this.state.activeTab !== tab) {
//       this.setState({
//         activeTab: tab
//       });
//     }
//   }
//   render() {
//     return (
//       <div>
//         <Nav tabs>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: this.state.activeTab === '1' })}
//               onClick={() => { this.toggle('1'); }}
//             >
//               Tab1
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: this.state.activeTab === '2' })}
//               onClick={() => { this.toggle('2'); }}
//             >
//               Moar Tabs
//             </NavLink>
//           </NavItem>
//         </Nav>
//         <TabContent activeTab={this.state.activeTab}>
//           <TabPane tabId="1">
//             <Row>
//               <Col sm="12">
// 								<span className="coin-info">
// 									<span>O</span>
// 									<span>Sep 28 (20x)</span>
// 									<span>0.000000215 ^</span>
// 								</span>
//               </Col>
//             </Row>
//           </TabPane>
//           <TabPane tabId="2">
//             <Row>
//               <Col sm="6">
//                 <Card body>
//                   <CardTitle>Special Title Treatment</CardTitle>
//                   <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
//                   <Button>Go somewhere</Button>
//                 </Card>
//               </Col>
//               <Col sm="6">
//                 <Card body>
//                   <CardTitle>Special Title Treatment</CardTitle>
//                   <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
//                   <Button>Go somewhere</Button>
//                 </Card>
//               </Col>
//             </Row>
//           </TabPane>
//         </TabContent>
//       </div>
//     );
//   }
// }

export default QuickNavCoins;