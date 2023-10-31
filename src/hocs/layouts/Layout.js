import { connect } from "react-redux";

function Layout({children}) {
    return(
        <div>
            {children}
        </div>
    )
}

const mapStatetoProps = state => ({

})

export default connect(mapStatetoProps, {

}) (Layout);