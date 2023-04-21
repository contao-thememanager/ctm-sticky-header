# ctm-sticky-header

## Description
Extends the theme manager configuration with new fields for a sticky header integration.

After compiling your theme, make sure to add:
- _stickyheader.css to your Layout stylesheet settings
- js_ctm_stickyheader to your javascript template

Make sure to follow following order of css files in your layout due to performance

1. _stickyheader.css
2. ...
3. _theme.css (theme manager core)
4. ...

## Settings
<table>
  <tr>
    <th colspan="2"><strong>Sticky Header</strong></th>
  </tr>
  <tr>
    <td><strong>Option</strong></td>
    <td><strong>Description</strong></td>
  </tr>
  <tr>
    <td>$sh-background-start</td>
    <td>Initial background color for the sticky header</td>
  </tr>
  <tr>
    <td>$sh-color-start</td>
    <td>Color for navigation items</td>
  </tr>
  <tr>
    <td>$sh-color-start-hover</td>
    <td>Color for navigation items when hovered</td>
  </tr>
  <tr>
    <td>$sh-background-end</td>
    <td>Ending background color for the sticky header</td>
  </tr>
  <tr>
    <td>$sh-color-end</td>
    <td>Ending color for navigation items</td>
  </tr>
  <tr>
    <td>$sh-color-end-hover</td>
    <td>Ending color for navigation items when hovered</td>
  </tr>
  <tr>
    <td>$sh-stop-box-shadow</td>
    <td>Box-shadow dividing line when sticky header ended</td>
  </tr>
</table>
