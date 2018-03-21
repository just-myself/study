function mapStateToProps(state){
    return { userinfo:state.userinfo }
}
function mapDispatchToProps(dispatch){
    return{
        userinfoActions:bindActionCreators(userinfoActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Hello)