import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white font-sans selection:bg-[#242424] selection:text-white flex flex-col">
            <Navbar mode="legal" />

            <div className="container mx-auto px-4 pt-32 pb-20 flex-grow w-full">
                <div className="mx-auto space-y-4 text-zinc-700 leading-relaxed [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-zinc-900 [&_h1]:mb-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-zinc-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-zinc-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-zinc-900 [&_h4]:mt-6 [&_h4]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ul]:my-4 [&_p]:my-4 [&_li>p]:my-0 [&_a]:underline [&_a]:text-zinc-900 hover:[&_a]:text-zinc-700 [&_a]:transition-colors [&_strong]:text-zinc-900">
                    <h1>Privacy Policy</h1>
                    <p>Last updated: March 27, 2026</p>
                    <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                    <p>We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

                    <h2>Interpretation and Definitions</h2>
                    <h3>Interpretation</h3>
                    <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

                    <h3>Definitions</h3>
                    <p>For the purposes of this Privacy Policy:</p>
                    <ul>
                        <li><p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p></li>
                        <li><p><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.</p></li>
                        <li><p><strong>Application</strong> refers to PivotHire, the software program provided by the Company.</p></li>
                        <li><p><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Privacy Policy) refers to PivotHire Inc.</p></li>
                        <li><p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website.</p></li>
                        <li><p><strong>Country</strong> refers to: United States.</p></li>
                        <li><p><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</p></li>
                        <li><p><strong>Personal Data</strong> (or "Personal Information") is any information that relates to an identified or identifiable individual.</p></li>
                        <li><p><strong>Service</strong> refers to the Application or the Website or both.</p></li>
                        <li><p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</p></li>
                        <li><p><strong>Usage Data</strong> refers to data collected automatically.</p></li>
                        <li><p><strong>Website</strong> refers to PivotHire, accessible from <a href="https://www.pivothire.tech" rel="external nofollow noopener" target="_blank">https://www.pivothire.tech</a>, including its subdomains such as <a href="https://app.pivothire.tech" rel="external nofollow noopener" target="_blank">https://app.pivothire.tech</a>.</p></li>
                        <li><p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service.</p></li>
                    </ul>

                    <h2>Collecting and Using Your Personal Data</h2>
                    <h3>Types of Data Collected</h3>
                    <h4>Personal Data</h4>
                    <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                    <ul>
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Professional history, resumes, and relevant career information</li>
                        <li>Codebases, software repositories, and technical assessments (securely retained with timestamps for project auditing and dispute resolution)</li>
                        <li>Identity verification status (We only receive verification results from our compliance partners, not the actual ID documents)</li>
                    </ul>

                    <h4>Usage Data</h4>
                    <p>Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

                    <h4>Tracking Technologies and Cookies</h4>
                    <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.</p>

                    <h3>Use of Your Personal Data</h3>
                    <p>The Company may use Personal Data for the following purposes:</p>
                    <ul>
                        <li><p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p></li>
                        <li><p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service.</p></li>
                        <li><p><strong>For AI-Assisted Processing and Codebase Analysis:</strong> We utilize Artificial Intelligence (AI) and Large Language Models, primarily powered by <strong>OpenAI</strong>, to analyze professional profiles, resumes, job descriptions, and <strong>Your provided codebases or software repositories</strong> to facilitate talent matching, technical evaluations, and project scoping. <strong>We strictly do not use Your Personal Data, codebases, or proprietary information to train public AI models.</strong> To maintain the rights, interests, and dispute resolution capabilities for both our engineers and clients, We securely store encrypted copies and timestamps of all business-related project code. This stored data is kept strictly confidential. Data processed via OpenAI's API is used solely for fulfilling the Service and, per their enterprise API policies, is not retained or used by them to train their models.</p></li>
                        <li><p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased.</p></li>
                        <li><p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</p></li>
                        <li><p><strong>For business transfers:</strong> We may use Your Personal Data to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets.</p></li>
                    </ul>

                    <h2>Third-Party Processors (Payments, Identity, and AI)</h2>
                    <p>We provide paid products, escrow coordination, payouts to engineers, identity verification, and AI-assisted matching within the Service. To ensure maximum security, compliance, and performance, We utilize specialized third-party services for these functions.</p>

                    <h3>Payment Processing, Payouts, and Escrow</h3>
                    <p>We will not store or collect Your payment card details or bank account information. For project payments, engineer payouts, and escrow services, PivotHire acts as a platform facilitator but <strong>does not operate as a financial custodian or a fund pool</strong>. All funds, holds, and releases are routed and managed directly by our compliant third-party financial partners.</p>

                    <h3>Identity Verification (KYC)</h3>
                    <p>To maintain platform trust, safety, and financial compliance, We may require identity verification. PivotHire does not directly collect, store, or process Your sensitive identity documents on our servers. This data is handled entirely by our partners in accordance with their strict security and privacy standards; We only receive a secure token or status confirming Your verification.</p>

                    <p>The primary third-party processors We work with include:</p>
                    <ul>
                        <li><strong>Stripe:</strong> For payments, escrow routing, and identity verification. Their Privacy Policy can be viewed at <a href="https://stripe.com/privacy" target="_blank" rel="external nofollow noopener">https://stripe.com/privacy</a></li>
                        <li><strong>Wise:</strong> For cross-border payouts and related verification. Their Privacy Policy can be viewed at <a href="https://wise.com/legal/privacy-policy" target="_blank" rel="external nofollow noopener">https://wise.com/legal/privacy-policy</a></li>
                        <li><strong>OpenAI:</strong> For AI-assisted resume parsing, codebase analysis, and matching. Their Privacy Policy can be viewed at <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="external nofollow noopener">https://openai.com/policies/privacy-policy</a></li>
                    </ul>

                    <h3>Retention of Your Personal Data</h3>
                    <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.</p>

                    <h3>Transfer of Your Personal Data</h3>
                    <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from Your jurisdiction.</p>

                    <h3>Delete Your Personal Data</h3>
                    <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section. You may also contact Us to request access to, correct, or delete any Personal Data that You have provided to Us.</p>

                    <h3>Disclosure of Your Personal Data</h3>
                    <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>

                    <h2>California Privacy Rights (CCPA/CPRA & CalOPPA)</h2>
                    <p>If You are a resident of California, You are granted specific rights regarding Your personal information under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA). You have the right to request that We disclose certain information to You about Our collection and use of Your Personal Information over the past 12 months, the right to request the deletion of Your Personal Information, <strong>the right to correct inaccurate personal information</strong>, <strong>the right to limit the use and disclosure of sensitive personal information</strong>, and the right to opt-out of the sale or sharing of Your Personal Information. <strong>PivotHire does not sell Your Personal Information.</strong></p>
                    <p>To exercise any of these rights, please contact Us. <strong>We will respond to verifiable consumer requests within forty-five (45) days of receipt.</strong></p>
                    <p>In compliance with CalOPPA, We agree that users can visit our site anonymously. Users will be notified of any Privacy Policy changes on our Privacy Policy page. Users can change their personal information by logging into their account or contacting Us. Our Service responds to "Do Not Track" signals.</p>

                    <h2>Children's Privacy</h2>
                    <p>Our Service does not address anyone under the age of 18 (or the legal age of majority in Your jurisdiction). We do not knowingly collect personally identifiable information from anyone under the age of 18. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 18 without verification of parental consent, We take steps to remove that information from Our servers.</p>

                    <h2>Links to Other Websites</h2>
                    <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>

                    <h2>Changes to this Privacy Policy</h2>
                    <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and update the "Last updated" date at the top of this Privacy Policy.</p>

                    <h2>Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                    <ul>
                        <li>By email: <a href="mailto:core@pivothire.tech">core@pivothire.tech</a></li>
                    </ul>
                </div>
            </div>

            <div className="bg-white pt-4">
                <div id="bottom-card" className="bg-[#242424] text-white rounded-t-[2.5rem] mx-4 lg:mx-8">
                    <div className="pt-8">
                        <Footer />
                    </div>
                </div>
            </div>
        </main>
    );
}
