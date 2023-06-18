import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
function Home() {

  return(
  <> <MyCarousel/> 
     <Tabs/>
  </>
  );
}

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight:"600px"}}
          src="./images/i1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight:"600px"}}
          src="./images/i2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{maxHeight:"600px"}}
          src="./images/i3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
function Tabs(){
  return(

	<div class="container-fluid sp">	
	<div class="row col-12 mx-auto cp mt-5 pt-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
		<ul class="nav nav-pills nav-justified" id="pills-tab" role="tablist">
		  <li class="nav-item" role="presentation">
			<a class="nav-link rounded-top text-uppercase" id="pills-vision-tab" data-bs-toggle="pill" data-bs-target="#pills-vision" type="button" role="tab" aria-controls="pills-vision" aria-selected="false" tabindex="-1">Vision </a>
		  </li>
		  <li class="nav-item" role="presentation">
			<a class="nav-link active rounded-top text-uppercase" id="pills-mission-tab" data-bs-toggle="pill" data-bs-target="#pills-mission" type="button" role="tab" aria-controls="pills-mission" aria-selected="true">Mission</a>
		  </li>
		  <li class="nav-item" role="presentation">
			<a class="nav-link rounded-top text-uppercase" id="pills-about-tab" data-bs-toggle="pill" data-bs-target="#pills-about" type="button" role="tab" aria-controls="pills-about" aria-selected="false" tabindex="-1">About Us</a>
		  </li>
		 
		</ul>
		<div class="tab-content h-content rounded" id="pills-tabContent">
		  <div class="tab-pane fade" id="pills-vision" role="tabpanel" aria-labelledby="pills-vision-tab" tabindex="0">
		  	<h4>Our Vision &amp; Value</h4>
			
		  	<h5> Our Vision</h5>			
			<p>To emerge as the premier R&amp;D institution for the design, development and deployment of world class electronic and IT solutions for economic and human advancement.</p>
			
			<h5> Our Mission</h5>			
			<p>Our MissionC-DAC's Mission statement has evolved after deep thought and in consultation with the members of C-DAC. The Mission Statement as defined below, reflects the fabric and character of C-DAC and integrates in the fulfillment of C-DAC's Vision.</p>
			<ul>
				<li>Expand the frontiers of Electronics and Information Technology.</li>
				<li>Evolve technology solutions - architectures, systems and standards for nationally important problems.</li>
				<li>Achieve rapid and effective spread of knowledge by overcoming language barriers through application of technologies.</li>
				<li>Share experience and know-how to help build advanced competence in the areas of Electronics and Information Technology.</li>
				<li>Bring benefits of Electronics and Information Technology to society.</li>
				<li>Utilize the Intellectual Property generated by converting it to business opportunity.</li>
			</ul>
			
			<h5> Our Core Values</h5>			
			<p>The essence of C-DAC's philosophy and the bed rock of our Corporate Culture...</p>
			<ul>
				<li>Innovation and pursuit of excellence in 'Applications', 'Research' and 'Technology' (ART).</li>
				<li>Integrity, transparency and openness in all our actions.</li>
				<li>Working with and through the 'Teams' is our way of life.</li>
				<li>Distributed Leadership across the organization at various levels.</li>
				<li>Strive to continuously improve our processes and quality.</li>
				<li>Address the needs of the society through user centric initiatives.</li>
			</ul>
			
		  </div>
		  <div class="tab-pane fade show active" id="pills-mission" role="tabpanel" aria-labelledby="pills-mission-tab" tabindex="0">
		  	<h4>Mission Mode Programme</h4>
		  	<p>C-DAC with its focus in Advanced Computing is uniquely positioned to establish dependable and secure Exascale Ecosystem offering services in various domains.  C-DAC has crafted its strategic practical roadmap keeping in perspective the paradigm shift in the global technological ecosystem and ever-dynamic area of national ICT scenario. Accordingly, the roadmap has been devised with four-pronged approach based on the Core as HPC &amp; Cloud., viz. Futuristic Research, Applied R&amp;D, Applications and Services covering 28 thrust areas. Towards realisation of the roadmap, mission mode programmes were evolved to research, develop and deliver the futuristic technologies/solutions. </p>
			
			<p class="pb-3">C-DAC has crafted its strategic practical roadmap keeping in perspective the paradigm shift in the global technological ecosystem and ever-dynamic area of national ICT scenario. The technological advancements in high-speed communication, intense computation, storage, and infrastructure coupled with mobility and accessibility has impacted the modalities of conducting business in a revolutionary manner. </p>
			
			<div class="row">
				<div class="col-md-3 col-sm-12 text-center">
					<img src="img/exascale.png" alt="Exascale" class="border border-5 shadow rounded-circle border-white"/><br/><h6 class="my-3">Exascale Computing Mission</h6>
				</div>
				
				<div class="col-md-3 col-sm-12 text-center">
					<img src="img/quantom.png" alt="Quantum Computing" class="border border-5 shadow rounded-circle border-white"/><br/><h6 class="my-3">Quantum Computing Mission</h6>	
				</div>
				
				<div class="col-md-3 col-sm-12 text-center">
					<img src="img/micro.png" alt="Microprocessor" class="border border-5 shadow rounded-circle border-white"/><br/><h6 class="my-3">Microprocessor and Strategic Electronics Mission</h6>
				</div>
				
				<div class="col-md-3 col-sm-12 text-center">
					<img src="img/ioe.png" alt="IoE, Dependable" class="border border-5 shadow rounded-circle border-white"/><br/><h6 class="my-3">IoE, Dependable and Secure Computing Mission</h6>
				</div>
			 </div>
		  </div>
		  
		  <div class="tab-pane fade" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab" tabindex="0">
		  	
			<h4>About Us</h4>
		  	
			<p>Centre for Development of Advanced Computing (C-DAC) is the premier R&amp;D organization of the Ministry of Electronics and Information Technology (MeitY) for carrying out R&amp;D in IT, Electronics and associated areas.  Different areas of C-DAC, had originated at different times, many of which came out as a result of identification of opportunities.</p>
			
			<ul>
				<li>The setting up of C-DAC in 1988 itself was to built Supercomputers in context of denial of import of Supercomputers by USA. Since then C-DAC has been undertaking building of multiple generations of Supercomputer starting from PARAM with 1 GF in 1988.</li>
				<li>Almost at the same time, C-DAC started building Indian Language Computing Solutions with setting up of GIST group (Graphics and Intelligence based Script Technology); National Centre for Software Technology (NCST) set up in 1985 had also initiated work in Indian Language Computing around the same period.</li>
				<li>Electronic Research and Development Centre of India (ER&amp;DCI) with various constituents starting as adjunct entities of various State Electronic Corporations, had been brought under the hold of Department of Electronics and Telecommunications (now MeitY) in around 1988. They were focusing on various aspects of applied electronics, technology and applications.</li>
				<li>With the passage of time as a result of creative ecosystem that got set up in C-DAC, more areas such as Health Informatics, etc., got created; while right from the beginning the focus of NCST was on Software Technologies; similarly C-DAC started its education &amp; training activities in 1994 as a spin-off with the passage of time, it grew to a large efforts to meet the growing needs of Indian Industry for finishing schools.</li>
			</ul>
			
			<p>C-DAC has today emerged as a premier R&amp;D organization in IT&amp;E (Information Technologies and Electronics) in the country working on strengthening national technological capabilities in the context of global developments in the field and responding to change in the market need in selected foundation areas.  In that process, C-DAC represents a unique facet working in close junction with MeitY to realize nation’s policy and pragmatic interventions and initiatives in Information Technology. As an institution for high-end Research and Development (R&amp;D), C-DAC has been at the forefront of the Information Technology (IT) revolution, constantly building capacities in emerging/enabling technologies and innovating and leveraging its expertise, caliber, skill sets to develop and deploy IT products and solutions for different sectors of the economy, as per the mandate of its parent, the Ministry of Electronics and Information Technology, Ministry of Communications and Information Technology, Government of India and other stakeholders including funding agencies, collaborators, users and the market-place. </p>
			
		 </div>
		 
		</div>	
	
	</div>
	
	
	
	</div>
  
  );
}

export default Home;