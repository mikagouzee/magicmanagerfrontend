angular.module(
    "magicManagerApp.cardDetailElement.factory",
    //add chart serialize
    ["nvd3"]
    ).factory(
    "cardDetailElementFactory",
    cardDetailElementFactory
    );

//add chart serialize
function cardDetailElementFactory() {
    return [{
        order: 1,
        type: 'cms-subelement-builder',
        parentClass: 'row',
        viewExtension: '.view.html',
        subElements: [{
            order: 1,
            parentClass: 'col-xs-12',
            type: 'product-profile-cms/product-title',
            titleIntro: 'Detail of',
            sku: productInfo.articleId,
            title: productInfo.product.productName
        }, {
            order: 2,
            parentClass: 'col-xs-12',
            type: 'product-profile-cms/last-update',
            label: 'last update',
            lastUpdate: productInfo.actualPrice.workerEditTime
        }]
    }, {
        order: 2,
        type: 'cms-subelement-builder',
        parentClass: 'row',
        viewExtension: '.view.html',
        subElements: [{
            order: 1,
            type: 'cms-subelement-builder',
            parentClass: 'col-xs-12 col-sm-4 col-md-3',
            viewExtension: '.view.html',
            subElements: [{
                order: 1,
                parentClass: 'col-xs-12',
                type: 'product-profile-cms/image',
                imageUrl: productInfo.product.imageUrl,
                childClass: 'img-responsive center-block'
            }, {
                order: 2,
                parentClass: 'col-xs-12 text-center',
                type: 'product-profile-cms/flag',
                flagCode: productInfo.article.languageId
            }, {
                order: 3,
                type: 'product-profile-cms/link-button',
                iconClass: 'fa fa-globe',
                parentClass: 'col-xs-12',
                childClass: 'btn btn-info btn-block',
                url: productInfo.product.productUrl,
                label: 'Voir sur MKM',
                target: '_blank'
            }, {
                order: 4,
                type: 'cardDetail/favorite',
                parentClass: 'col-xs-12',
                inactive: {
                    button: 'btn btn-block btn-default',
                    icon: 'fa fa-star-o',
                    text: 'Ajouter aux favoris'
                },
                active: {
                    button: 'btn btn-block btn-primary',
                    icon: 'fa fa-star',
                    text: 'Retirer de favoris'
                }
            }]
        }, {
            order: 2,
            parentClass: 'col-xs-12 col-sm-8 col-md-9 text-center',
            type: 'product-profile-cms/technical-sheet',
            title: 'Informations produit',
            techSheetData: productInfo,
            techSheetTables: [{
                model: [{
                    label: 'Foil',
                    key: 'article.isFoil',
                    type: 'boolean'
                }, {
                    label: 'Signed',
                    key: 'article.isSigned',
                    type: 'boolean'
                }, {
                    label: 'Altered',
                    key: 'article.isAltered',
                    type: 'boolean'
                }, {
                    label: 'Playset',
                    key: 'article.isPlayset',
                    type: 'boolean'
                }, {
                    label: 'First Edition',
                    key: 'article.isFirstEd',
                    type: 'boolean'
                }],
                direction: 'horizontal'
            }, {
                title: 'Détails',
                model: [{
                    label: 'Langue',
                    key: 'article.languageId'
                }, {
                    label: 'Rareté',
                    key: 'product.rarity'
                }, {
                    label: 'Nombre sur le site',
                    key: 'article.siteWideCount'
                }, {
                    label: 'Prix de votre stock',
                    key: 'actualPrice.price',
                    type: 'number',
                    subType: 'currency'
                }, {
                    label: 'Prix Sell',
                    key: 'actualPrice.sell',
                    type: 'number',
                    subType: 'currency'
                }, {
                    label: 'Prix Low',
                    key: 'actualPrice.low',
                    type: 'number',
                    subType: 'currency'
                }, {
                    label: 'Prix Average',
                    key: 'actualPrice.average',
                    type: 'number',
                    subType: 'currency'
                }],
                direction: 'vertical'
            }]
        }]
    }, {
        order: 3,
        parentClass: 'row',
        childClass: 'col-xs-12',
        type: 'cms-elements/hr'
    }, {
        order: 4,
        parentClass: 'row',
        childClass: 'col-xs-12',
        type: 'cms-elements/title',
        level: 2,
        title: 'Evolution des prix'
    }, {
        order: 5,
        parentClass: 'row',
        type: 'cms-elements/chart',
        childClass: 'col-xs-12',
        chartClass: 'with-3d-shadow with-transitions',
        chartOptions: {
            chart: {
                type: 'lineChart',
                height: 250,
                x: function(d) {
                    return d.x;
                },
                y: function(d) {
                    return d.y;
                },
                useInteractiveGuideline: true,
                xAxis: {
                    axisLabel: 'Date',
                    tickFormat: function(d) {
                        return d3.time.format('%d/%m/%Y')(new Date(d));
                    }
                },
                yAxis: {
                    axisLabel: 'Prix (€)',
                    tickFormat: function(d) {
                        return d3.format("$,.2f")(d)
                    }
                }
            }
        },
        chartData: chartSerializeFactory.serialize(vm.productInfo.dailyPrices, {
            key: 'workerEditTime'
        }, [{
            key: 'price',
            label: 'Price'
        }, {
            key: 'sell',
            label: 'Sell'
        }, {
            key: 'low',
            label: 'Low'
        }, {
            key: 'average',
            label: 'Average'
        }])
    }, {
        order: 6,
        parentClass: 'row',
        childClass: 'col-xs-12',
        type: 'cardDetail/dailyPricesHistory',
        dailyPrices: productInfo.dailyPrices
    }];
};