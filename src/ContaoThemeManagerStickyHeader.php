<?php

declare(strict_types=1);

namespace ContaoThemeManager\StickyHeader;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class ContaoThemeManagerStickyHeader extends Bundle
{
    public function getPath(): string
    {
        return \dirname(__DIR__);
    }
}
