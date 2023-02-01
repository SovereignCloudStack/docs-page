// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebarsDocs = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'release-notes/Release1',
        'release-notes/Release2',
        'release-notes/Release3',
        'release-notes/Release4',
        'release-notes/ReleaseX'
      ]
    },
    {
      type: 'category',
      label: 'Openstack Image Manager',
      items: [
        'openstack-image-manager/overview',
        'openstack-image-manager/requirements',
        'openstack-image-manager/quickstart',
        'openstack-image-manager/configuration',
        'openstack-image-manager/contribute'
      ]
    }
    /* No documents available yet in https://github.com/SovereignCloudStack/docs/tree/main/operations
    {
      type: 'category',
      label: 'Operating SCS',
      items: [
        'operations/iaas/',
        'operations/iam/',
        'operations/kaas/',
        'operations/operations/'
      ]
    },
    */
  ]
}

module.exports = sidebarsDocs
