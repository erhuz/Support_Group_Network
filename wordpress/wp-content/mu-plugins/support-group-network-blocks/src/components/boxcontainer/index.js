import { InnerBlocks } from '@wordpress/editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const getLayout = ( count ) => {
	switch ( count ) {
		case 1:
			return [ { isLarge: true } ];
		case 2:
			return [ { isWide: true }, { isLarge: true } ];
		case 3:
			return [ {}, {}, { isLarge: true } ];
		case 4:
			return [ { isWide: true }, {}, {}, { isWide: true } ];
		case 5:
			return [ {}, {}, { isWide: true }, {}, {} ];
		default:
			return [ {}, {}, {}, {}, {}, {} ];
	}
};

registerBlockType( 'cgb/block-boxcontainer', {

	title: __( 'Container' ),
	icon: 'shield',
	category: 'common',

	edit: function( props ) {
		const { children } = props;

		const count = React.Children.count( children );
		const layout = getLayout( count );

		const content = React.Children.map( children, ( child, index ) => {
			return React.cloneElement( child, layout[ index ] );
		} );

		return (
			<div className={ `box-container ${ count === 1 ? 'single' : '' }` }>
				<InnerBlocks
					allowedBlocks={ [ 'sgnblocks/textblock' ] }
				/>
			</div>
		);
	},

	save: function( ) {
		return (
			<div>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
