// import Header from "./Header";
import '../css/pricing.css'
import { Link } from "react-router-dom";


const Pricing = () => {
  return (
    <>
    {/* <Header/> */}
    <section className="section">
	<div className="container">
		<h1 className="title is-1 has-text-centered has-text-weight-bold">
			
		</h1>
		<div className="spacer"></div>
		<div className="columns">
			<div className="column is-one-third has-text-centered has-background-white">
				<h2 className="title is-3 plan_title has-text-weight-bold has-text-black">Single Pass</h2>
				<p className="has-text-weight-light plan_subtitle">Any of Our Great Classes</p>
				<div className="price">
					<h2 className="title is-2 has-text-weight-bold">$10<span className="has-text-weight-light">/pass</span></h2>
				</div>
				<div className="spacer"></div>
				<div className="features">
					<p>Access to any 1 Class</p>
					<p>Use of the Weights Gym</p>
					<p>Towel Service Included</p>
				</div>
				<div className="spacer"></div>
				<Link to={{
              pathname: "/payment",
              state: { price: 10 }
            }} className="button is-primary">
              Get Started Now
            </Link>
				{/* <button className="button is-primary">Get Started Now</button> */}
			</div>
			<div className="column is-one-third has-text-centered best_selling">
				<h2 className="title is-3 plan_title has-text-white has-text-weight-bold">Yearly Pass</h2>
				<p className="has-text-weight-light plan_subtitle">This is the best value plan</p>
				<div className="price">
					<h2 className="title is-2 has-text-weight-bold">$500<span className="has-text-weight-light">/year</span></h2>
				</div>
				<div className="spacer"></div>
				<div className="features has-text-white">
					<p>Full Access for a Year</p>
					<p>Use of the Weights Gym</p>
					<p>Towel Service Included</p>
					<p>VIP Treatment</p>
					<p>Five Private Trainings</p>
					<p>Use of Tennis Courts</p>
				</div>
				<div className="spacer"></div>
				<Link to={{
              pathname: "/payment",
              state: { price: 500 }
            }} className="button is-primary">
              Get Started Now
            </Link>
				{/* <button className="button is-primary best_selling_btn">Get Started Now</button> */}
			</div>
			<div className="column is-one-third has-text-centered has-background-white">
				<h2 className="title is-3 plan_title has-text-weight-bold has-text-black">Monthly Plan</h2>
				<p className="has-text-weight-light plan_subtitle">This is a quarterly plan</p>
				<div className="price">
					<h2 className="title is-2 has-text-weight-bold">$60<span className="has-text-weight-light">/month</span></h2>
				</div>
				<div className="spacer"></div>
				<div className="features">
				<p>Full Access for a Month</p>
				<p>Use of the Weights Gym</p>
				<p>Towel Service Included</p>
				</div>
				<div className="spacer"></div>
				<Link to={{
              pathname: "/payment",
              state: { price: 60 }
            }} className="button is-primary">
              Get Started Now
            </Link>
				{/* <button className="button is-primary">Get Started Now</button> */}
			</div>
		</div>
	</div>
</section>
    </>
  );
};
export default Pricing;