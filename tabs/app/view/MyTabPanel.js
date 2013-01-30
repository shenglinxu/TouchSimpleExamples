/*
 * File: app/view/MyTabPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyTabPanel', {
    extend: 'Ext.tab.Panel',

    config: {
        tabBar: {
            docked: 'top'
        },
        items: [
            {
                xtype: 'container',
                title: 'Tab 1',
                cls: 'card1',
                html: '1'
            },
            {
                xtype: 'container',
                title: 'Tab 2',
                cls: 'card2',
                html: '2'
            },
            {
                xtype: 'container',
                title: 'Tab 3',
                cls: 'card3',
                html: '3'
            }
        ]
    }

});