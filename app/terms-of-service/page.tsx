import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white font-sans selection:bg-[#242424] selection:text-white flex flex-col">
            <Navbar mode="legal" />
            
            <div className="container mx-auto px-4 pt-32 pb-20 flex-grow w-full">
                <div className="mx-auto space-y-4 text-zinc-700 leading-relaxed [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-zinc-900 [&_h1]:mb-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-zinc-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-zinc-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-zinc-900 [&_h4]:mt-6 [&_h4]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ul]:my-4 [&_p]:my-4 [&_li>p]:my-0 [&_a]:underline [&_a]:text-zinc-900 hover:[&_a]:text-zinc-700 [&_a]:transition-colors [&_strong]:text-zinc-900">
                    <h1>Terms of Service</h1>
                    <p>Last updated: April 13, 2026</p>
                    <p>Please read these Terms of Service carefully before using Our Service.</p>

                    <h2>Interpretation and Definitions</h2>
                    <h3>Interpretation</h3>
                    <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    <h3>Definitions</h3>
                    <p>For the purposes of these Terms of Service:</p>
                    <ul>
                        <li><p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p></li>
                        <li><p><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.</p></li>
                        <li><p><strong>Country</strong> refers to: Illinois, United States</p></li>
                        <li><p><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in these Terms of Service) refers to PivotHire Inc., 409 E Chalmers St Apt 1006.</p></li>
                        <li><p><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</p></li>
                        <li><p><strong>Service</strong> refers to the Website, which facilitates software development, maintenance, and talent coordination on a non-subscription, project-based basis.</p></li>
                        <li><p><strong>Terms of Service</strong> (also referred to as "Terms") means these Terms of Service that form the entire agreement between You and the Company regarding the use of the Service.</p></li>
                        <li><p><strong>Website</strong> refers to PivotHire, accessible from <a href="https://www.pivothire.tech" rel="external nofollow noopener" target="_blank">https://www.pivothire.tech</a>, including its subdomains such as <a href="https://app.pivothire.tech" rel="external nofollow noopener" target="_blank">https://app.pivothire.tech</a>.</p></li>
                        <li><p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p></li>
                    </ul>

                    <h2>Acknowledgment</h2>
                    <p>These are the Terms of Service governing the use of this Service and the agreement between You and the Company. These Terms of Service set out the rights and obligations of all users regarding the use of the Service.</p>
                    <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms of Service. These Terms of Service apply to all visitors, users and others who access or use the Service.</p>
                    <p>By accessing or using the Service You agree to be bound by these Terms of Service. If You disagree with any part of these Terms of Service then You may not access the Service.</p>
                    <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
                    <p>Your access to and use of the Service is also subject to Our Privacy Policy. Please read Our Privacy Policy carefully before using Our Service.</p>

                    <h2>User Accounts and Third-Party Authentication</h2>
                    <p>When You create an account with Us, You must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.</p>
                    <p>You may register and log in to the Service using third-party authentication providers, specifically <strong>Google</strong> and <strong>GitHub</strong> (OAuth). By utilizing these third-party services, You authorize Us to access and use certain information from these accounts (such as Your email address and basic profile details) as outlined in Our Privacy Policy. You are solely responsible for safeguarding the password and credentials for Your third-party accounts and for any activities or actions under Your password.</p>

                    <h2>User-Generated Content</h2>
                    <p>Our Service allows You to upload, post, store, and share content, including but not limited to software code, project requirements, documentation, and related materials ("Content"). You retain any and all of Your rights to any Content You submit, post or display on or through the Service, and You are responsible for protecting those rights.</p>
                    <p>By posting Content to the Service, You grant Us the right and license to use, store, and process such Content strictly for the purpose of providing software development, maintenance, and talent matching services to You. <strong>We do not claim ownership of Your Content.</strong></p>
                    <p>You represent and warrant that: (i) the Content is Yours (You own it) or You have the right to use it and grant Us the rights as provided in these Terms, and (ii) the posting of Your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.</p>

                    <h2>Third-Party Services</h2>
                    <p>Our Service relies on third-party providers to facilitate payments, payouts, electronic contract execution, and related functions. By using the Service, You acknowledge and agree that certain aspects of Your experience are governed by the terms and policies of these third-party providers:</p>
                    <ul>
                        <li><p><strong>Stripe:</strong> We use Stripe for payment processing, escrow routing, and identity verification. Your use of payment features is subject to the <a href="https://stripe.com/legal/end-users" target="_blank" rel="external nofollow noopener">Stripe Connected Account Agreement</a> and <a href="https://stripe.com/privacy" target="_blank" rel="external nofollow noopener">Stripe Privacy Policy</a>.</p></li>
                        <li><p><strong>Wise:</strong> We use Wise for cross-border payouts to engineers. Payouts processed through Wise are subject to the <a href="https://wise.com/terms-and-conditions" target="_blank" rel="external nofollow noopener">Wise Terms of Use</a> and <a href="https://wise.com/legal/privacy-policy" target="_blank" rel="external nofollow noopener">Wise Privacy Policy</a>.</p></li>
                        <li><p><strong>Dropbox Sign:</strong> We use Dropbox Sign for electronic contract and agreement execution. Your use of electronic signatures is subject to the <a href="https://www.hellosign.com/terms" target="_blank" rel="external nofollow noopener">Dropbox Sign Terms of Service</a> and <a href="https://www.dropbox.com/privacy" target="_blank" rel="external nofollow noopener">Dropbox Privacy Policy</a>.</p></li>
                        <li><p><strong>OpenAI:</strong> We use OpenAI for AI-assisted resume parsing, codebase analysis, and talent matching. Data processed via OpenAI's API is used solely for fulfilling the Service and is not retained or used by them to train their models. Their policies can be viewed at <a href="https://openai.com/policies/terms-of-use" target="_blank" rel="external nofollow noopener">OpenAI Terms of Use</a> and <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="external nofollow noopener">OpenAI Privacy Policy</a>.</p></li>
                    </ul>
                    <p>We are not responsible for the practices or policies of these third-party services. We encourage You to review their respective terms and privacy policies.</p>

                    <h2 id="dmca">Copyright Policy (DMCA Notice and Takedown Procedure)</h2>
                    <p>We respect the intellectual property rights of others. It is Our policy to respond to any claim that Content posted on the Service infringes a copyright or other intellectual property infringement of any person.</p>
                    <p>If You are a copyright owner, or authorized on behalf of one, and You believe that the copyrighted work has been copied in a way that constitutes copyright infringement taking place through the Service, You must submit Your notice in writing to the attention of our copyright agent via email at <a href="mailto:core@pivothire.tech">core@pivothire.tech</a> and include in Your notice a detailed description of the alleged infringement.</p>
                    <p><strong>To be effective under the Digital Millennium Copyright Act (DMCA), Your notice must include the following:</strong></p>
                    <ul>
                        <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest.</li>
                        <li>A description of the copyrighted work that You claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work.</li>
                        <li>Identification of the URL or other specific location on the Service where the material that You claim is infringing is located.</li>
                        <li>Your address, telephone number, and email address.</li>
                        <li>A statement by You that You have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
                        <li>A statement by You, made under penalty of perjury, that the above information in Your notice is accurate and that You are the copyright owner or authorized to act on the copyright owner's behalf.</li>
                    </ul>
                    <p>Upon receipt of a valid DMCA notification, We will take whatever action, in Our sole discretion, We deem appropriate, including removal of the challenged content from the Service.</p>

                    <h2>Links to Other Websites</h2>
                    <p>Our Service may contain links to third-party websites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>

                    <h2>Termination</h2>
                    <p>We may terminate or suspend Your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms of Service. Upon termination, Your right to use the Service will cease immediately.</p>

                    <h2>Limitation of Liability</h2>
                    <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
                    <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data, business interruption, or personal injury) arising out of or in any way related to the use of or inability to use the Service.</p>

                    <h2>"AS IS" and "AS AVAILABLE" Disclaimer</h2>
                    <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement.</p>

                    <h2>Governing Law</h2>
                    <p>The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Service may also be subject to other local, state, national, or international laws.</p>

                    <h2>Disputes Resolution</h2>
                    <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>

                    <h2>For European Union (EU) Users</h2>
                    <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.</p>

                    <h2>United States Legal Compliance</h2>
                    <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>

                    <h2>Severability and Waiver</h2>
                    <h3>Severability</h3>
                    <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
                    <h3>Waiver</h3>
                    <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>

                    <h2>Changes to These Terms of Service</h2>
                    <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms.</p>

                    <h2>Contact Us</h2>
                    <p>If you have any questions about these Terms of Service, You can contact us:</p>
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
