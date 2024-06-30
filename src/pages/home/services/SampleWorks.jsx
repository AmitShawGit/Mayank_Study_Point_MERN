import React from 'react'
import ContentWrapper from '../../../components/wrapper/ContentWrapper';
import { Link } from 'react-router-dom';

const SampleWorks = () => {
    let goToProject = () => {

        window.open("https://drive.google.com/drive/folders/1-AWTlTznchIVFG3m8uITsj6pDo1zS8dI")
    }
    let goToAssignment = () => {
        window.open
            ("https://drive.google.com/drive/folders/1P3sGxohTJLzVNdVvCLYiDmpLW6f1neyd")
    }

    return (
        <>
            <ContentWrapper>
                <h2 className='heading'>Sample Assignments and Projects</h2>
                <p>Please be aware that the sample assignments and projects showcased in the "Sample Assignments and Project" section of our website are provided for illustrative purposes only.<b> These samples are intentionally incomplete and may contain copied or partially plagiarized content. </b>

                    The purpose of displaying these samples is to provide students with an idea of the structure and format of assignments and projects. They are intended to serve as a reference point to help students understand what a completed assignment or project may look like.

                    It is important to note that these samples are not meant to be submitted as original work. Using them as such may lead to academic dishonesty and could result in penalties from educational institutions.

                    We strongly encourage students to use the samples responsibly, ensuring that any content they create is original and properly cited. Additionally, we recommend consulting with instructors or academic advisors for guidance on completing assignments and projects.

                    By accessing the sample assignments and projects on our website, you acknowledge and accept this disclaimer. We are committed to promoting academic integrity and assisting students in their learning journey. If you have any questions or concerns, please feel free to <Link to="/contact">contact us</Link>.
                    <br /><br />
                    Thank you for your understanding.</p>
                    <div className="text-center">

                <button className='btn btn-primary' onClick={goToProject}>Sample Project</button> &nbsp;
                <button className='btn btn-primary' onClick={goToAssignment}>Sample Assignment</button>
                    </div>
            </ContentWrapper>
        </>
    )
}

export default SampleWorks