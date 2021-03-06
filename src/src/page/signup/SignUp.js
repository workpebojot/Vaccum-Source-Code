import * as React from 'react';
import * as Library from '../../abstract-library';
import * as Helper from '../../abstract-helper';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.firebase = new Helper.FirebaseMethod
            (
                {
                    props: this.props
                }
            );
    }

    state = {
        email: false,
        password: false,
        match: false,
        cancelkeyboard: Library.Native.Keyboard.dismiss
    }

    doneEmail(value) {
        this.state.email = value;
        this.setState({ email: this.state.email });
    }

    donePassword(value) {
        this.state.password = value;
        this.setState({ password: this.state.password });
    }

    isMatch(value) {
        if ((value === this.state.password) && value.length > 5) {
            this.state.match = true;
            this.setState({ match: this.state.match });
        } else {
            this.state.match = false;
            this.setState({ match: this.state.match });
        }
    }

    onSubmit() {
        this.state.cancelkeyboard = Library.Native.Keyboard.dismiss();
        this.setState({ cancelkeyboard: this.state.cancelkeyboard });
        this.firebase.onSignUp(this.state.email, this.state.password, this.props);
    }

    render() {
        return (
            <Library.Base.Container style={{ backgroundColor: "#fcc4c3" }}>
                <Library.Base.Header
                    androidStatusBarColor="#fcc4c3"
                    noLeft
                    transparent>
                    <Library.Base.Left style={{ flex: 1, margin: 10 }}>
                        <Library.Native.Pressable
                            android_ripple={{ color: "#fcc4c3", borderless: true }}
                            onPress={
                                () => Library.Nav.pop(this.props.componentId)
                            }>
                            <Library.Base.Text style={{ color: "white" }}>Back</Library.Base.Text>
                        </Library.Native.Pressable>
                    </Library.Base.Left>
                    <Library.Base.Body style={{ flex: 1 }}>
                        <Library.Base.Button transparent block>
                            <Library.Base.Title>Sign Up</Library.Base.Title>
                        </Library.Base.Button>
                    </Library.Base.Body>
                    <Library.Base.Right style={{ flex: 1, margin: 10 }}>
                        <Library.Native.Pressable
                            android_ripple={{ color: "#05dee2", borderless: true }}
                            onPress={
                                () => Library.Nav.pop(this.props.componentId)
                            }>
                            <Library.Base.Text style={{ color: "white" }}>Vacuum</Library.Base.Text>
                        </Library.Native.Pressable>
                    </Library.Base.Right>
                </Library.Base.Header>
                <Library.Base.Content padder>
                    <Library.Box.Grid>
                        <Library.Box.Col size={10}></Library.Box.Col>
                        <Library.Box.Col size={80}>
                            <Library.Native.Image source={require('../../assets/images/vacuum-cover.png')} style={{ height: 200, width: null }} />
                        </Library.Box.Col>
                        <Library.Box.Col size={10}></Library.Box.Col>
                    </Library.Box.Grid>
                    <Library.Box.Grid style={{ backgroundColor: "#e5f8f5", padding: 10, borderRadius: 10 }}>
                        <Library.Box.Col style={{ padding: 15, backgroundColor: "#ffffff", borderRadius: 5 }}>
                            <Library.Base.Item floatingLabel>
                                <Library.Base.Icon type="MaterialCommunityIcons" name='email-outline' />
                                <Library.Base.Label>Email</Library.Base.Label>
                                <Library.Base.Icon name='information-circle' onPress={this.showDialogAndroidEmailInfo} />
                                <Library.Base.Input
                                    onSubmitEditing={this.state.cancelkeyboard}
                                    onChangeText={this.doneEmail.bind(this)} />
                            </Library.Base.Item>
                            <Library.Base.Item floatingLabel>
                                <Library.Base.Icon name='md-lock-closed-outline' />
                                <Library.Base.Label>Password</Library.Base.Label>
                                <Library.Base.Input
                                    onSubmitEditing={this.state.cancelkeyboard}
                                    secureTextEntry={true} onChangeText={this.donePassword.bind(this)} />
                            </Library.Base.Item>
                            <Library.Base.Item floatingLabel>
                                <Library.Base.Icon name='md-lock-closed-outline' />
                                <Library.Base.Label>Confirm Password</Library.Base.Label>
                                <Library.Base.Input
                                    onSubmitEditing={this.state.cancelkeyboard}
                                    secureTextEntry={true} onChangeText={this.isMatch.bind(this)} />
                                <Library.Base.Icon
                                    name={
                                        this.state.match ? 'checkmark-circle' : 'close-circle'
                                    }
                                    style={{ color: this.state.match ? 'green' : 'red' }} />
                            </Library.Base.Item>
                            <Library.Base.Text>{'\n'}</Library.Base.Text>
                            <Library.Native.TouchableOpacity disabled={this.state.match ? false : true}>
                                <Library.Base.Button
                                    disabled={this.state.match ? false : true}
                                    rounded
                                    block
                                    style={{ backgroundColor: this.state.match ? "#05dee2" : "#e4f7fd", elevation: 0 }}
                                    onPress={this.onSubmit.bind(this)}>
                                    <Library.Base.H3 style={{ color: "#000000" }}>Let's Clean</Library.Base.H3>
                                </Library.Base.Button>
                            </Library.Native.TouchableOpacity>
                        </Library.Box.Col>
                    </Library.Box.Grid>
                    <Library.Box.Grid>
                        <Library.Box.Row>
                            <Library.Box.Col size={10}></Library.Box.Col>
                            <Library.Box.Col size={80}>
                                <Library.Base.Text style={{ color: "#ffffff", textAlign: "center" }}>
                                    By clicking <Library.Base.Text>Let's Clean</Library.Base.Text>,
                            you agree to our <Library.Base.Text
                                        onPress={this.showDialogAndroidTermsOfService}
                                        style={{ fontWeight: "bold" }}>Terms of Service </Library.Base.Text>and
                                <Library.Base.Text
                                        onPress={this.ShowDialogAndroidPrivacyGuidelines}
                                        style={{ fontWeight: "bold" }}
                                    >
                                        {" "}Privacy Guideline
                                </Library.Base.Text>
                                </Library.Base.Text>
                            </Library.Box.Col>
                            <Library.Box.Col size={10}></Library.Box.Col>
                        </Library.Box.Row>
                    </Library.Box.Grid>
                </Library.Base.Content>
                <Library.Base.Footer style={{ elevation: 0 }}>
                    <Library.Base.FooterTab style={{ backgroundColor: "#fcc4c3" }}>
                        <Library.Base.Button transparent block style={{ elevation: 0 }}>
                            <Library.Base.Text style={{ color: "#ffffff" }}>
                                Vacuum Version 1.9.14 2021-2022
                                    </Library.Base.Text>
                        </Library.Base.Button>
                    </Library.Base.FooterTab>
                </Library.Base.Footer>
            </Library.Base.Container>
        );
    }

    componentDidMount() {
        Library.DialogAndroid.alert("",
            `Before signing up, please read our <b>Terms of Service</b> and <b>Privacy Guidelines</b>`,
            {
                contentIsHtml: true,
                cancelable: false
            }
        );
    }

    showDialogAndroidTermsOfService = async () => {
        try {
            await Library.DialogAndroid.alert('Terms of Service',
                `
                <h5>About Terms of Service</h5>
                    <span>
                        Users must obey or comply with the terms of service given below.
                        The terms of use include the disambiguation that we use, the 
                        privileges and obligations of consumers, disclaimer, and 
                        alteration of terms of service.
                    </span>
            
                <h5>Disambugation of Terms</h5>
                    <span>
                        First of all, disambiguation refers to the lack of uncertainty by making things clear.
                        You need to know what disambiguation is. The sense of words is narrowed down by 
                        disambiguation and it's a positive thing. I make words plain in this app. 
                        I also use words often instead of symbols, and if I use icons, I add affordances.
                        <br><br>
                        Affordances are characteristics of icons that are related to objects
                        in the physical world. It means that when I used paddle lock icons, it applies
                        to objects from the real world so that you can recognize them. 
                        <br><br>
                        Users can also notice this uncertainty when other users read what you say or what you write,
                        they may not understand it. However, as this app's spectrum is 
                        geographical and language-oriented, there may be less trouble unless someone reports it
                    </span>
            
                <h5>User Responsibilities</h5>
                    <span>
                        I want the user to use it according to this application's style.
                        The theme of this application is to bring others to work and give them work.
                        There are some parts in this application where users are responsible.
                        <br><br>
                        Like posting a job, others expect your post to be true and not fraudulent.
                        However, I have a solution here, first, you can only create a job if your phone or email is verified.
                        Sometimes, you may apply for a job but you will not go or you may not agree later.
                        Others expect that what you are doing here in the application will be true, 
                        you can cancel your application if you need.
                        <br><br>
                        There are two types when we talk about privacy policy. First is data collection, 
                        here in the Vacuum application, I collect very little data about you, so the 
                        identifier that can be used against you online is small.
                        <br><br>
                        But of course,
                        you should also be aware of what you are doing here in the Vacuum application,
                        are they right for others? Because sometimes, the information you enter may be
                        right for you but it is wrong for others.
                        <br><br>
                        I would like to make a paid membership to support my Vacuum application.
                        You are responsible if you want me to join or not. Paid subscription is just one of my app 
                        revenue models. In this revenue model, when users subscribe, you'll pay a monthly fee 
                        for access to my app.
                        <br><br>
                        Second is data processing, I will tell you how I process the data 
                        about you. First, before I process it, the information you provide must 
                        be true, are they true? Second, if it is true, I will put it in a protected database 
                        using cloud utilities from Google Inc. Third, only a few people can 
                        see it because the vacuum application is geographic-oriented, meaning, 
                        the data will not appear in other geographic area, unless you show it 
                        to others or share it to a friend, so be responsible for the 
                        information if you want to share.
                        <br><br>
                        But you can delete your data here in Vacuum Application,
                        but be responsible, once you delete it it will not come back.
                        Remember, be responsible, what you don't understand, please approach me
                        so you can complain to me the solution to the problem.
                    </span>
                <h5>Legal liability</h5>
                    <span>
                        If there are damages incurred by you or by users with this Vacuum application 
                        that hurts others, or even killed, I/We can file a lawsuit to you or to users regarding cybercrime
                        using the Cybercrime Prevention Act of 2012 or Republic Act No. 10175.
                    </span>
                <h5>Modification of Terms</h5>
                    <span>
                        I will change them from time to time according to 
                        my terms of service. For starters, if there is any change, I can notify users.
                    </span>
            `,
                {
                    contentIsHtml: true
                }
            );
        } catch (error) { console.log("Error: ", error); }
    }

    ShowDialogAndroidPrivacyGuidelines = async () => {
        try {
            await Library.DialogAndroid.alert('Privacy Guideline',
                `
            <h5>About Privacy Guideline</h5>
                <span>
                    My privacy guidelines discussed app users need 
                    that their private information may be fulfilled 
                    in compliance with my rules to be processed this
                    and my app handled enough.
                </span>
            
                <h5>Data Collection of Personal Information</h5>
                    <span>
                        There are two topics, one is data storage,
                        and the second is data processing, while we talk
                        about privacy, as I said. This is the details I
                        get from you in the data collection: <b>Name</b>, <b>Location</b>,
                        <b>Email</b> and <b>Phone Number.</b>
                        <br><br>
                        When it comes to data collection, we're going to
                        talk about how it's going to be processed, I'm going
                        to place it in the database with the name, and use
                        it as a user id, I'm going to use it in the system
                        sometimes enough that other users know your name,
                        so the name won't exist in another geographic area
                        depending on the geographic area you're actually residing in.
                        <br><br>
                        I will use it locally as your limit or distance,
                        which means that it is exclusive to where your data
                        will go until you share it with someone.
                        <br><br>
                        For authentication, your email and phone number
                        are included. You can pretend on the internet,
                        but because phone authentication was invented,
                        we will know that you are the rightful one, but sometimes phone number is not enough. In 
                        the other hand, email can also be used to check
                        identities, but it can also be used as a newsletter
                        where you can collect news about the status of the
                        Vacuum Application, and if you change your password,
                        it can also be used.
                    </span>
                <h5>No User Suprise</h5>
                    <span>
                        Many business models use customer surprise where
                        you believe you're not going to pay, so you're
                        going to be paid finally, this always happens
                        and not a culture of vacuum application, no theft here.
                    </span>
                <h5>Third Party Collection</h5>
                    <span>
                        I have a system from a third party that the
                        knowledge goes to a system that I can no
                        longer monitor. But third-party services
                        like Google Cloud encrypt this knowledge.
                    </span>
                <h5>Collection and Processing Limitation</h5>
                    <span>
                        As I said, I obtain only limited user information and only limited processes by which it is used.
                    </span>
            `,
                {
                    contentIsHtml: true
                }
            );
        } catch (error) { console.log("Error: ", error); }
    }

    showDialogAndroidEmailInfo = async () => {
        try {
            await Library.DialogAndroid.alert("",
                `<b>Why do we need an email from you?</b> Your email may be either verified or 
            non-verified when you register your email. If you want your email to be verified later, 
            we will use it for email notification.`,
                {
                    contentIsHtml: true
                }
            );
        } catch (error) { console.log("Error: ", error); }
    }
}