// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
// By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Contribute',
      items: [
        'contribute/dco-and-licenses',
        'contribute/installation',
        'contribute/license-considerations',
        'contribute/linting',
        'contribute/quickstart',
        'contribute/structure',
        'contribute/styleguide'
      ]
    },
    {
      type: 'category',
      label: 'OpenStack Image Manager',
      link: {
        type: 'generated-index',
        title: 'OpenStack Image Manager',
        description: 'The OpenStack Image Manager is an easy to use Application for managing all images in the OpenStack horizont.'
      },
      items: [
        'openstack-image-manager/overview',
        'openstack-image-manager/requirements',
        'openstack-image-manager/quickstart',
        'openstack-image-manager/getting_started',
        'openstack-image-manager/configuration',
        'openstack-image-manager/contribute'
      ]
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'release notes/Release1',
        'release notes/Release2',
        'release notes/Release3',
        'release notes/Release4',
        'release notes/ReleaseX'
      ]
    },
    'glossary'
  ]
}

module.exports = sidebars
