import React, { useEffect, useState, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppRouter } from '../routes';
//import { getCurrentUser } from '../redux/actions/customerAction';

const App = props => {
   // const [configAvailable, setConfigAvailable] = useState(false);

    const {
        
        /*getCurrentUser,
        fetchDocPdf,
        saveResumeTask,
        config: { chieftainValues, caseId, issue, reason, applyFor },
        content: { productNames, helpPanel, progressIndicatorItems, progressIndicatorItemsJoint },
        error: { isError },
        navigateToNextScreen,
        hideBackButton,
        showLeftPanel,
        showRightPanel,
        isClubMAccount,
        isJointAccount*/
    } = props;



    /* const header = (
       <HeaderComponent
         isError={isError}
         productName={applyFor}
         productList={issue ? Variants : productNames}
         issue={issue}
       />
     ); */

    /* const rightSidebar = showRightPanel && (
       <RightPanel content={helpPanel} isClubMAccount={isClubMAccount} />
     );*/

    //const leftSidebar = showLeftPanel && <LeftPanel progressItems={progressItems} />;

    /*const utilityNavigation = !isError && !hideBackButton && (
      <UtilityNav
        leftContent={
          <BackButton
            onClick={() => {
              navigateToNextScreen(navigateToPreviousPage(), true);
            }}
          />
        }
      />
    );*/

    return (
        <div>

            <AppRouter />

        </div>
    );
};

const mapStateToProps = state => ({
    config: state.config,
});

const mapDispatch = dispatch =>
    bindActionCreators(
        {
          
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatch
)(App);