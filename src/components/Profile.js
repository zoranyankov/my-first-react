function Profile(props) {
    return (
        <div class="user-info">
            <div>
                <p>Email: <span>another1user@omg.bg</span></p> |
                <p>My offers: <span>[2]</span></p> |
                <p><a href="/auth/logout">Logout</a></p>
            </div>
            <div class="shoes">
                <div class="shoe">
                    <img
                        src="https://devonwithkids.co.uk/wp-content/uploads/2020/04/Quiz-300x223.jpg"
                        alt="quiz1" />
                    <h3>Adidas Falcon <span>$132.00</span></h3>
                </div>
                <div class="shoe">
                    <img src="https://devonwithkids.co.uk/wp-content/uploads/2020/04/Quiz-300x223.jpg"
                        alt="quiz2" />
                    <h3>Nike Pegasus <span>$72.90</span></h3>
                </div>
            </div>
            <p class="total-profit">Total profit: <span>$204.90</span></p>
        </div>
    );
}

export default Profile;