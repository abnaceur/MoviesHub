import React from "react";
import { getAllMembers } from '../shared/services/userServices/getAllUsers';

class Memebers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colorLabel: ['label-success', 'label-info', 'label-warning', 'label-primary'],
            allMembers: [],
        }
    }

    async UNSAFE_componentWillMount() {
        let members = await getAllMembers();
        if (members.code === 200)
            this.setState({
                allMembers: members.data
            })
    }

    render() {
        const { allMembers } = this.state;

        return (

            <div className="image-flip">
                {allMembers ?
                    allMembers.map((member, index) => {
                        return (
                            <div className="card-members">
                                <div className="card-body text-center">
                                    <p><img className="img-fluid" src={
                                        member.imageUrl && member.imageUrl.toString().substring(0, 5) === 'https' ?
                                            member.imageUrl
                                            : member.imageUrl !== undefined ?
                                                process.env.REACT_APP_URL + "/" + member.imageUrl
                                                : "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png"
                                    }
                                        alt="card" /></p>
                                    <h4 className="card-title">{member.givenName} {member.familyName}</h4>
                                    <ul className="list-inline">
                                        {/* <li className="list-inline-item">
                                            {member.email}
                                        </li> */}
                                        <li className="list-inline-item">
                                            {member.pseudonyme}
                                        </li>
                                        {/* <li className="list-inline-item">
                                            {member.dateOfCreation}
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                    : ""}

            </div>



        );
    }
}

export default Memebers;
