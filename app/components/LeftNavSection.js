import React from 'react';

// overarching component tag
import LeftNav from 'material-ui/lib/left-nav';

// Top half of menu
import MenuItem from 'material-ui/lib/menus/menu-item';
import Badge from 'material-ui/lib/badge';

// list elements
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

// icons
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentSend from 'material-ui/lib/svg-icons/content/send';

module.exports = React.createClass({
  render: function () {
    return (
        <LeftNav open={this.props.open}>
            <MenuItem onClick={this.switchView}>HTML<Badge badgeContent={32} secondary={true}
            badgeStyle={{top: 18, right: 0}} ></Badge></MenuItem>
            <MenuItem onClick={this.switchView}>CSS<Badge badgeContent={27} secondary={true}
            badgeStyle={{top: 18, right: 0}} ></Badge></MenuItem>
            <MenuItem onClick={this.switchView}>JS<Badge badgeContent={45} secondary={true}
            badgeStyle={{top: 18, right: 0}} ></Badge></MenuItem>
            <MenuItem onClick={this.switchView}>Node<Badge badgeContent={24} secondary={true}
            badgeStyle={{top: 18, right: 0}} ></Badge></MenuItem>
						<List subheader="Nested List Items">
							<ListItem primaryText="Node" leftIcon={<ContentSend />} />
							<ListItem primaryText="Express" leftIcon={<ContentDrafts />} />
							<ListItem
								primaryText="MDN"
								leftIcon={<ContentInbox />}
								initiallyOpen={true}
								primaryTogglesNestedList={true}
								nestedItems={[
									<ListItem
										key={1}
										primaryText="JavaScript"
										leftIcon={<ActionGrade />}
									/>,
									<ListItem
										key={2}
										primaryText="CSS"
										leftIcon={<ContentSend />}
										disabled={true}
										nestedItems={[
											<ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
										]}
									/>,
								]}
							/>
						</List>
        </LeftNav>
			)
		}
	})