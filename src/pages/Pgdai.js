import CourseDropdowns from './CppCourseModules';

function Pgdai() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
  
  function Header() {
    return (
      <>
        <h1>PG-DAI</h1>
      </>
    );
  }
  
  function Body() {
    return (
      <>
        <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical"  style={{padding:"3px 0px 0 9px"}}>
          <button class="nav-link text-dark" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="false">Course Focus</button><hr/>
          <button class="nav-link text-dark" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Eligibility Criteria</button><hr/>
          <button class="nav-link text-dark" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">Course Fees</button><hr/>
          <button class="nav-link text-dark" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Course Contents</button><hr/>
          <button class="nav-link text-dark" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Course Outcome</button><hr/>
          <button class="nav-link text-dark" id="v-pills-faqa-tab" data-bs-toggle="pill" data-bs-target="#v-pills-faqa" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">FAQs</button><hr/>
        </div>
        <div class="tab-content px-4 " id="v-pills-tabContent"  style={{minHeight:"600px",backgroundColor:"#f7f7f7"
               ,textAlign:"justify",width:"82%"}}>
          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">The objective of the PG-DAI course is to present in-depth knowledge and applications in Artificial Intelligence using tools and case studies. Upon completion of this course, participants will be empowered to use computational techniques in the area of Artificial Intelligence, Natural Language Processing, Machine Learning and Deep Learning based applications.</div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">The educational criteria for PG-DAI course is<br/>
          <ul>
  <li>Graduate in Engineering (10+2+4 or 10+3+3 years) in IT / Computer Science / Electronics / Telecommunications / Electrical / Instrumentation, OR</li>
  <li>MSc/MS (10+2+3+2 years) in Computer Science, IT, Electronics OR</li>
  <li>Graduate in any discipline of Engineering, OR</li>
  <li>Post Graduate Degree in Mathematics/ Statistics/ Physics, OR</li>
  <li>MCA, MCM</li>
  <li>The candidate must have 60% in the qualifying degree.</li>
</ul></div>
          <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
         <p>The Post Graduate Diploma in Artificial Intelligence course will be delivered in fully ONLINE or fully PHYSICAL mode. The total course fee and payment details for the fully PHYSICAL or fully ONLINE mode of delivery is as detailed herein below:</p>
          <h5>PHYSICAL Mode of Delivery:</h5>
  <p>The course fee for the fully PHYSICAL mode of delivery is <b>INR. 1,50,000/- </b>plus Goods and Service Tax (GST) as applicable by Government of India (GOI).</p>
  <p>The course fee for PG-DAI has to be paid in two installments as per the schedule:</p>
  <ul>
    <li>First installment is INR. 10,000/- plus Goods and Service Tax (GST) as applicable by GOI.</li>
    <li>Second installment is INR. 1,40,000/- plus Goods and Service Tax (GST) as applicable by GOI.</li>
  </ul>

  <h5>ONLINE Mode of Delivery:</h5>
  <p>The course fee for the fully ONLINE mode of delivery is INR. 127,500/- plus Goods and Service Tax (GST) as applicable by GOI.</p>
  <p>The course fee for PG-DAI has to be paid in two installments as per the schedule:</p>
  <ul>
    <li>First installment is INR. 10,000/- plus Goods and Service Tax (GST) as applicable by GOI.</li>
    <li>Second installment is INR. 117,500/- plus Goods and Service Tax (GST) as applicable by GOI.</li>
  </ul>

  <p>The course fee includes expenses towards delivering classes, conducting examinations, final mark-list and certificate, and placement assistance provided.</p>
  <p><b>The first installment course fee of Rs 10,000/- + GST </b>on it as applicable at the time of payment is to be paid online as per the schedule. It can be paid using credit/debit cards through the payment gateway. The first installment of the course fees is to be paid after the seat is allocated during counseling rounds.</p>
  <p>The second installment of the course fees is to be paid before the course commencement through NEFT.</p>

  <p><b>Note:</b> Candidates may take note that no Demand Draft (DD) or cheque or cash will be accepted at any C-DAC training center towards payment of any installment of course fees.</p>
    </div>
          
          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
          <ul>
  <li>Fundamental of Artificial Intelligence - 40 Hours</li>
  <li>Mathematics for AI - 40 Hours</li>
  <li>Java Programming - 60 Hours</li>
  <li>Advanced Programming using Python - 90 Hours</li>
  <li>Data Analytics - 90 Hours</li>
  <li>Practical Machine Learning - 100 Hours</li>
  <li>Deep Neural Networks - 90 Hours</li>
  <li>Natural Language Processing & Computer Vision - 100 Hours</li>
  <li>AI Compute Platforms, Applications & Trends - 110 Hours</li>
  <li>Aptitude & Effective Communication - 90 Hours</li>
  <li>Project - 90 Hours</li>
</ul>

          </div>
          
          
          
          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
         <p>PG Diploma in Artificial Intelligence (PG-DAI) comprehensive programme that combines Data Science, Machine Learning and Deep Learning to prepare candidates for the roles of Applied AI Scientists, Applied AI engineers, AI architects, Technology architects, Solution Engineers, Technology Consultants.</p>
         </div>

          <div class="tab-pane fade" id="v-pills-faqa" role="tabpanel" aria-labelledby="v-pills-faq-tab" tabindex="0">
          <h5>Q: What is the Eligibility for PG-Diploma in Artificial Intelligence?</h5>
  <p>A: The eligibility Criteria for PG-DAI is Candidate holding any one of the following degrees:</p>
  <ul>
    <li>Graduate in any Engineering (10+2+4 or 10+3+3 years) in IT / Computer Science / Electronics / Telecommunications / Electrical / Instrumentation, OR Graduate in any discipline of Engineering</li>
    <li>MSc/MS (10+2+3+2 years) in Computer Science, IT, Electronics with Mathematics in 10+2, OR</li>
    <li>Post Graduate Degree in Mathematics/ Statistics/ Physics, OR</li>
    <li>MCA,MCM</li>
  </ul>
  <p>The candidate must have 60% in the qualifying degree.</p>

  <h5>Q: What is the selection criterion?</h5>
  <p>A: The selection process consists of a C-DAC Common Admission Test (C-CAT).</p>

  <h5>Q: Bank loan assistance for the other centres?</h5>
  <p>A: Facility of educational loans is available for the selected candidates, which will be provided by nationalized banks only.</p>

  <h5>Q: Revision of the course contents, is it every six months?</h5>
  <p>A: The course contents are revised according to the real-world needs and when found relevant to emerging trends.</p>

  <h5>Q: Do you have a centralized placement cell?</h5>
  <p>A: Yes. We do have a Centralized Placement Programme where the respective center actively participates to organize the campus interviews for all the students.</p>

  <h5>Q: What is the value of the course in the international market?</h5>
  <p>A: The course has been a trend-setting course due to its unique curriculum and the opportunities that it generates; hence it gives the edge over for the students and gives an international edge.</p>

      </div>
        </div>
</div>
 </>
    );
  }

  function Footer() {
    return (
      <>
        <h1>App Footer</h1>
      </>
    );
  }
  
  export default Pgdai;