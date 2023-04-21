<?php

// Add SCSS sources
$GLOBALS['TC_SOURCES']['configFiles'][] = 'bundles/contaothememanagerstickyheader/framework/scss/_config.scss';

// Push base css as first entry
array_unshift($GLOBALS['TC_SOURCES']['files'], 'bundles/contaothememanagerstickyheader/framework/scss/_stickyheader.scss');
