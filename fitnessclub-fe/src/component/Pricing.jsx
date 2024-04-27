import Header from "./Header";
import '../css/pricing.css'

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
				<h2 className="title is-3 plan_title has-text-weight-bold">Basic Plan</h2>
				<p className="has-text-weight-light plan_subtitle">This is the basic plan</p>
				<div className="price">
					<h2 className="title is-2 has-text-weight-bold">$40<span className="has-text-weight-light">/month</span></h2>
				</div>
				<div className="spacer"></div>
				<div className="features">
					<p>Feature One</p>
					<p>Feature Two</p>
					<p>Feature Three</p>
					<p className="unavailable">Feature Four</p>
					<p className="unavailable">Feature Five</p>
					<p className="unavailable">Feature Six</p>
					<p className="unavailable">Feature Seven</p>
					<p className="unavailable">Feature Eight</p>
					<p className="unavailable">Feature Nine</p>
					<p className="unavailable">Feature Ten</p>
				</div>
				<div className="spacer"></div>
				<button className="button is-primary">Get Started Now</button>
			</div>
			<div className="column is-one-third has-text-centered best_selling">
				<h2 className="title is-3 plan_title has-text-white has-text-weight-bold">Best Selling</h2>
				<p className="has-text-weight-light plan_subtitle">This is the best selling plan</p>
				<div className="price">
					<h2 className="title is-2 has-text-weight-bold">$400<span className="has-text-weight-light">/year</span></h2>
				</div>
				<div className="spacer"></div>
				<div className="features has-text-white">
					<p>Feature One</p>
					<p>Feature Two</p>
					<p>Feature Three</p>
					<p>Feature Four</p>
					<p>Feature Five</p>
					<p>Feature Six</p>
					<p className="unavailable">Feature Seven</p>
					<p className="unavailable">Feature Eight</p>
					<p className="unavailable">Feature Nine</p>
					<p className="unavailable">Feature Ten</p>
				</div>
				<div className="spacer"></div>
				<button className="button is-primary best_selling_btn">Get Started Now</button>
			</div>
			<div className="column is-one-third has-text-centered has-background-white">
				<h2 className="title is-3 plan_title has-text-weight-bold">Deluxe Plan</h2>
				<p className="has-text-weight-light plan_subtitle">This is a quarterly plan</p>
				<div className="price">
					<h2 className="title is-2 has-text-weight-bold">$900<span className="has-text-weight-light">/quarterly</span></h2>
				</div>
				<div className="spacer"></div>
				<div className="features">
					<p>Feature One</p>
					<p>Feature Two</p>
					<p>Feature Three</p>
					<p>Feature Four</p>
					<p>Feature Five</p>
					<p>Feature Six</p>
					<p>Feature Seven</p>
					<p>Feature Eight</p>
					<p>Feature Nine</p>
					<p>Feature Ten</p>
				</div>
				<div className="spacer"></div>
				<button className="button is-primary">Get Started Now</button>
			</div>
		</div>
	</div>
</section>
    </>
  );
};
export default Pricing;