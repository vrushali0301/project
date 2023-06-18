
function Pgdac() {
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
        <h1>PG-DAC</h1>
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
        <div class="tab-content px-4 h-100" id="v-pills-tabContent"  style={{minHeight:"600px",backgroundColor:"#f7f7f7"
               ,textAlign:"justify",width:"82%"}}>
          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">PG-DAC is the most popular PG Diploma course of C-DAC. The course is targeted towards Engineering Graduates 
                and MCA/MSc who wish to venture into the domain of advanced computing. The course aims to groom the students to enable them to work on current technology scenarios as well as prepare them to keep pace with the changing face of technology 
                and the requirements of the growing IT industry. The entire course syllabus, courseware, teaching methodology and the course delivery have been derived from the rich research and development background of C-DAC. Running successfully for 
                30 years, the PG-DAC course has produced thousands of professionals, who are well positioned in the industry today.</div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
<p>The education eligibility criteria for the PG-DAC course is:</p>
<ul>
  <li>Graduate in Engineering (10+2+4 or 10+3+3 years) in IT / Computer Science / Electronics / Telecommunications / Electrical / Instrumentation, OR MSc/MS (10+2+3+2 years) in Computer Science, IT, Electronics</li>
  <li>Graduate in any discipline of Engineering</li>
  <li>MCA, MCM</li>
  <li>Post Graduate Degree in Physics/ Mathematics / Statistics</li>
  <li>Post Graduate Degree in Management with graduation in IT / Computer Science / Computer Applications</li>
</ul>

<p>Candidates must have secured a minimum of 50% marks in their qualifying examination.</p></div>
          <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
<p>The Post Graduate Diploma in Advanced Computing (PG-DAC) course will be delivered in fully ONLINE or fully PHYSICAL mode. The total course fee and payment details for the fully PHYSICAL or fully ONLINE mode of delivery is as detailed herein below:</p>
<h5>Physical Mode of Delivery</h5>
<p>
  The course fee for the fully PHYSICAL mode of delivery is <b>INR. 90,000/- </b>plus Goods and Service Tax (GST) as applicable by Government of India (GOI). The course fees for PG-DAC course have to be paid in two installments as per the schedule.
</p>
<ul>
  <li>First installment: INR. 10,000/- plus GST</li>
  <li>Second installment: INR. 80,000/- plus GST</li>
</ul>

<h5>Online Mode of Delivery</h5>
<p>
  The course fee for the fully ONLINE mode of delivery is INR. 76,500/- plus Goods and Service Tax (GST) as applicable by GOI. The course fees for PG-DAC course have to be paid in two installments as per the schedule.
</p>
<ul>
  <li>First installment: INR. 10,000/- plus GST</li>
  <li>Second installment: INR. 66,500/- plus GST</li>
</ul>


<p>
  <b>The first installment course fee of Rs 10,000/- + GST </b>on it as applicable at the time of payment is to be paid online as per the schedule. It can be paid using credit/debit cards through the payment gateway. The first installment of the course fees is to be paid after the seat is allocated during counseling rounds.
</p>
<p>
  The second installment of the course fees is to be paid before the course commencement through NEFT.
</p>

<p>
  The course fee includes expenses towards delivering classes, conducting examinations, final mark-list and certificate, and placement assistance provided.
</p>
<p>
  Note: Candidates may take note that no Demand Draft (DD) or cheque or cash will be accepted at any C-DAC training centre towards payment of any installment of course fees.
</p></div>
          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
          <h1>C++ Topics</h1>
  
  <p id="cpp-topics"></p>

  <script>
    var cppTopics = "Getting Started, Operators & Expressions, Conditional and Looping Statements, Functions in C++, Memory Management and Pointers, OOP Concepts using C++, Constructor and Destructor, Inheritance, Polymorphism, Virtual Functions & Abstract Class, Exception Handling, Managing Console I/O Operations, File Handling in C++ & Templates, STL and RTTI";
    
    var cppTopicsParagraph = document.getElementById("cpp-topics");
    cppTopicsParagraph.textContent = "C++ Topics: " + cppTopics;
  </script></div>
          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
          <p>After completion of course students will be able to acquire the following skills:</p>
          <ul>
              <li>Use technologies to access and interpret information effectively</li>
              <li>Apply analytical skills to investigate unfamiliar problems using web technologies like HTML 5.0, CSS, JavaScript, jQuery, AngularJS</li>
              <li>Use quantitative data confidently and competently</li>
              <li>Use communication technologies competently</li>
              <li>Understand the multi-tier architecture of web-based enterprise applications using Enterprise JavaBeans</li>
              <li>Integrate Servlets, JSPs with EJB and Databases in J2EE application</li>
              <li>Understand .NET architecture, develop, and maintain applications</li>
          </ul>
          </div>
          
          <div class="tab-pane fade" id="v-pills-faqa" role="tabpanel" aria-labelledby="v-pills-faq-tab" tabindex="0">
          <h5>Q: What is the educational eligibility criteria for applying to PG-Diploma in Advanced Computing?</h5>
  <p>A: A candidate with any one of the following educational qualification can apply for PG-DAC:</p>
  <ul>
    <li>Graduate in Engineering (10+2+4 or 10+3+3 years) in IT / Computer Science / Electronics / Telecommunications / Electrical / Instrumentation.</li>
    <li>MSc/ MS (10+2+3+2 years) in Computer Science, IT, Electronics.</li>
    <li>Graduate in any discipline of Engineering or equivalent.</li>
    <li>MCA/MCM.</li>
    <li>Post Graduate in Physics/ Computational Sciences/ Mathematics or allied areas.</li>
    <li>Post Graduate in Management with graduation degree in Science/ IT/ Computers.</li>
    <li>The candidates must have secured a minimum of 50% marks in their qualifying examination.</li>
  </ul>

  <h5>Q: What is the process of selection to join PG – Diploma courses?</h5>
  <p>A: The selection process to join C-DAC PG Diploma courses is through C-DAC Common Admission Test (C-CAT).</p>

  <h5>Q: What is Course Fees of PG-DAC?</h5>
  <p>A: The fee for the PG-DAC course conducted in fully physical mode of delivery is INR. 90,000/- plus GST as applicable by GOI. The course fee for PG-DAC course delivered in the online mode is INR. 76,500/- plus GST as applicable by GOI.</p>

  <h5>Q: When does the PG Diploma courses commence?</h5>
  <p>A: The PG Diploma courses commence twice in a year in the month of March and September. Admission Process will start in the month of July and December every year.</p>

  <h5>Q: What is the duration of the course?</h5>
  <p>A: The duration of the course is 900 hours which is delivered in 24 weeks approximately.</p>

  <h5>Q: What is the infrastructure facilities available at training centres?</h5>
  <p>A: C-DAC training centres are equipped with classrooms with capacity to accommodate students and state-of-the-art IT lab facilities to enhance computing skills.</p>

  <h5>Q: Does the centres have Hostel / Canteen facility?</h5>
  <p>A: Hostel and canteen facilities are available for students enrolled in physical courses at some of the C-DAC training centres. Hostel allotments are made on a first-come, first-served basis. However, outstation students will be given preference when the allotment is done. Some centres that do not offer hostel facilities may provide assistance in finding suitable boarding and lodging for their students. Candidates interested in availing hostel accommodation should send their requests to the Administrative Officers at the respective training centres after the admission lists are published. Hostel/canteen fees, room availability, and other related information may be obtained by contacting the respective centre's contact person.</p>

  <h5>Q: Does Educational Loans are provided by the Banks for C-DAC Courses?</h5>
  <p>A: Facility of educational loans is provided for the selected candidates by all nationalized banks.</p>

  <h5>Q: What is the medium of instruction for PG Diploma Courses?</h5>
  <p>A: The medium of instruction for the PG Diploma Courses is English.</p>

  <h5>Q: Is the course contents of PG Diploma courses updated?</h5>
  <p>A: The course contents are updated and revised to meet the IT industry requirements. The courses are revised every batch by the C-DAC academic design and planning team in consultation with the IT industry.</p>

  <h5>Q: Do you have a centralized placement cell?</h5>
  <p>A: Yes, we do have a centralized placement cell which organizes a national level Common Campus Placement Programme spread across five regions, where the respective centers actively coordinate the task of organizing campus interviews for all the students.</p>

  <h5>Q: What is the value of the course in the international market?</h5>
  <p>A: The course has been a trend-setting course due to its unique curriculum and the opportunities that it generates; hence it gives an edge above others for the students and provides an international advantage.</p>

  <h5>Q: Is there any center-wise rank cut-off available for the admission to the PG Diploma courses?</h5>
  <p>A: No, there is no center-wise rank cut-off for the admission to the PG Diploma courses.</p>
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
  
  export default Pgdac;