/**
 * External Dependencies
 */
import React from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal Dependencies
 */
import connectSite from 'lib/reader-connect-site';
import SubscriptionListItem from 'blocks/reader-subscription-list-item/';

export default localize( connectSite(
	( { feed, site, translate, url, feedId, siteId } ) => (
		<SubscriptionListItem
			siteUrl={ url }
			siteTitle={ feed && feed.name }
			siteAuthor={ site && site.owner }
			siteExcerpt={ feed && feed.description }
			translate={ translate }
			feedId={ feedId }
			siteId={ siteId }
			site={ site }
			feed={ feed }
		/>
	)
) );
