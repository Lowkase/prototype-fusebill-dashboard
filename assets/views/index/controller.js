// --------------------------------------------------------------------------------
// CONTROLLER - INDEX
//---------------------------------------------------------------------------------
var grid = null;

var gridData = [
	[true, "widget-monthly-sales", 				"item item-50 item-graph",		`
	<div class="m-card">
		<div class="m-card-hdr">
			<div class="icon-title">
				<div class="icon">
					<svg viewBox="0 0 512 512"><g><title>Net Collections</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0" /><path d="M493.268,429.317H82.683V18.732C82.683,8.387,74.296,0,63.951,0S45.22,8.387,45.22,18.732v410.584H18.732 C8.387,429.316,0,437.703,0,448.047c0,10.345,8.387,18.732,18.732,18.732H45.22v26.489c0,10.345,8.387,18.732,18.732,18.732 s18.732-8.387,18.732-18.732V466.78h410.585c10.345,0,18.732-8.387,18.732-18.732S503.613,429.317,493.268,429.317z"/><path d="M207.06,223.207h-71.555c-10.345,0-18.732,8.387-18.732,18.732v143.672c0,3.449,2.796,6.244,6.244,6.244h96.531 c3.448,0,6.244-2.796,6.244-6.244V241.939C225.792,231.594,217.405,223.207,207.06,223.207z"/><path d="M350.158,162.916h-71.543c-10.345,0-18.732,8.387-18.732,18.732v203.963c0,3.449,2.796,6.244,6.244,6.244h96.518 c3.448,0,6.244-2.796,6.244-6.244V181.648C368.89,171.303,360.503,162.916,350.158,162.916z"/><path d="M493.268,102.625h-71.555c-10.345,0-18.732,8.387-18.732,18.732v264.254c0,3.448,2.796,6.244,6.244,6.244h96.531 c3.448,0,6.244-2.796,6.244-6.244V121.357C512,111.012,503.613,102.625,493.268,102.625z"/></g></svg>
				</div>
				<div class="title">MONTHLY SALES</div>
			</div>
			<div class="actions">
				<div class="text-action">VIEW</div>
			</div>
		</div>
		<div class="m-card-bdy m-card-bdy-no-padding">
			<div class="t-wrp">
				<div class="widget-graph">
					<img src="/assets/images/graph-blue.png" />
				</div>
				<div class="widget-data m-form-grid-row">
					<div class="m-form-grid-33">
						<div>Last Month</div>
						<div>$137,712.00 USD</div>
					</div>
					<div class="m-form-grid-33">
						<div>This Month</div>
						<div>$999,999,999.00 USD</div>
					</div>
					<div class="m-form-grid-33">
						<div>Last MTD</div>
						<div>$25,875.00 USD</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	`],

	[true, "widget-daily-cash", 				"item item-50 item-graph",		`
	<div class="m-card">
		<div class="m-card-hdr">
			<div class="icon-title">
				<div class="icon">
					<svg viewBox="0 0 512 512"><g><title>Net Collections</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0" /><path d="M493.268,429.317H82.683V18.732C82.683,8.387,74.296,0,63.951,0S45.22,8.387,45.22,18.732v410.584H18.732 C8.387,429.316,0,437.703,0,448.047c0,10.345,8.387,18.732,18.732,18.732H45.22v26.489c0,10.345,8.387,18.732,18.732,18.732 s18.732-8.387,18.732-18.732V466.78h410.585c10.345,0,18.732-8.387,18.732-18.732S503.613,429.317,493.268,429.317z"/><path d="M207.06,223.207h-71.555c-10.345,0-18.732,8.387-18.732,18.732v143.672c0,3.449,2.796,6.244,6.244,6.244h96.531 c3.448,0,6.244-2.796,6.244-6.244V241.939C225.792,231.594,217.405,223.207,207.06,223.207z"/><path d="M350.158,162.916h-71.543c-10.345,0-18.732,8.387-18.732,18.732v203.963c0,3.449,2.796,6.244,6.244,6.244h96.518 c3.448,0,6.244-2.796,6.244-6.244V181.648C368.89,171.303,360.503,162.916,350.158,162.916z"/><path d="M493.268,102.625h-71.555c-10.345,0-18.732,8.387-18.732,18.732v264.254c0,3.448,2.796,6.244,6.244,6.244h96.531 c3.448,0,6.244-2.796,6.244-6.244V121.357C512,111.012,503.613,102.625,493.268,102.625z"/></g></svg>
				</div>
				<div class="title">DAILY CASH</div>
			</div>
			<div class="actions">
				<div class="text-action">VIEW</div>
			</div>
		</div>
		<div class="m-card-bdy m-card-bdy-no-padding">
			<div class="t-wrp">
				<div class="widget-graph">
					<img src="/assets/images/graph-green.png" />
				</div>
				<div class="widget-data m-form-grid-row">
					<div class="m-form-grid-33">
						<div>Last Month</div>
						<div>$137,712.00 USD</div>
					</div>
					<div class="m-form-grid-33">
						<div>This Month</div>
						<div>$999,999,999.00 USD</div>
					</div>
					<div class="m-form-grid-33">
						<div>Last MTD</div>
						<div>$25,875.00 USD</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	`],

	[true, "widget-yearly-revenue", 				"item item-50 item-graph",		`
	<div class="m-card">
		<div class="m-card-hdr">
			<div class="icon-title">
				<div class="icon">
					<svg viewBox="0 0 512 512"><g><title>Net Collections</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0" /><path d="M493.268,429.317H82.683V18.732C82.683,8.387,74.296,0,63.951,0S45.22,8.387,45.22,18.732v410.584H18.732 C8.387,429.316,0,437.703,0,448.047c0,10.345,8.387,18.732,18.732,18.732H45.22v26.489c0,10.345,8.387,18.732,18.732,18.732 s18.732-8.387,18.732-18.732V466.78h410.585c10.345,0,18.732-8.387,18.732-18.732S503.613,429.317,493.268,429.317z"/><path d="M207.06,223.207h-71.555c-10.345,0-18.732,8.387-18.732,18.732v143.672c0,3.449,2.796,6.244,6.244,6.244h96.531 c3.448,0,6.244-2.796,6.244-6.244V241.939C225.792,231.594,217.405,223.207,207.06,223.207z"/><path d="M350.158,162.916h-71.543c-10.345,0-18.732,8.387-18.732,18.732v203.963c0,3.449,2.796,6.244,6.244,6.244h96.518 c3.448,0,6.244-2.796,6.244-6.244V181.648C368.89,171.303,360.503,162.916,350.158,162.916z"/><path d="M493.268,102.625h-71.555c-10.345,0-18.732,8.387-18.732,18.732v264.254c0,3.448,2.796,6.244,6.244,6.244h96.531 c3.448,0,6.244-2.796,6.244-6.244V121.357C512,111.012,503.613,102.625,493.268,102.625z"/></g></svg>
				</div>
				<div class="title">YEARLY REVENUE</div>
			</div>
			<div class="actions">
				<div class="text-action">VIEW</div>
			</div>
		</div>
		<div class="m-card-bdy m-card-bdy-no-padding">
			<div class="t-wrp">
				<div class="widget-graph">
					<img src="/assets/images/graph-orange.png" />
				</div>
				<div class="widget-data m-form-grid-row">
					<div class="m-form-grid-33">
						<div>Last Month</div>
						<div>$137,712.00 USD</div>
					</div>
					<div class="m-form-grid-33">
						<div>This Month</div>
						<div>$999,999,999.00 USD</div>
					</div>
					<div class="m-form-grid-33">
						<div>Last MTD</div>
						<div>$25,875.00 USD</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	`],

	[true, "widget-mrr", 				"item item-50 item-graph",		`
	<div class="m-card">
		<div class="m-card-hdr">
			<div class="icon-title">
				<div class="icon">
					<svg viewBox="0 0 512 512"><g><title>Net Collections</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0" /><path d="M493.268,429.317H82.683V18.732C82.683,8.387,74.296,0,63.951,0S45.22,8.387,45.22,18.732v410.584H18.732 C8.387,429.316,0,437.703,0,448.047c0,10.345,8.387,18.732,18.732,18.732H45.22v26.489c0,10.345,8.387,18.732,18.732,18.732 s18.732-8.387,18.732-18.732V466.78h410.585c10.345,0,18.732-8.387,18.732-18.732S503.613,429.317,493.268,429.317z"/><path d="M207.06,223.207h-71.555c-10.345,0-18.732,8.387-18.732,18.732v143.672c0,3.449,2.796,6.244,6.244,6.244h96.531 c3.448,0,6.244-2.796,6.244-6.244V241.939C225.792,231.594,217.405,223.207,207.06,223.207z"/><path d="M350.158,162.916h-71.543c-10.345,0-18.732,8.387-18.732,18.732v203.963c0,3.449,2.796,6.244,6.244,6.244h96.518 c3.448,0,6.244-2.796,6.244-6.244V181.648C368.89,171.303,360.503,162.916,350.158,162.916z"/><path d="M493.268,102.625h-71.555c-10.345,0-18.732,8.387-18.732,18.732v264.254c0,3.448,2.796,6.244,6.244,6.244h96.531 c3.448,0,6.244-2.796,6.244-6.244V121.357C512,111.012,503.613,102.625,493.268,102.625z"/></g></svg>
				</div>
				<div class="title">MRR</div>
			</div>
			<div class="actions">
				<div class="text-action">VIEW</div>
			</div>
		</div>
		<div class="m-card-bdy m-card-bdy-no-padding">
			<div class="t-wrp">
				<div class="widget-graph">
					<img src="/assets/images/graph-purple.png" />
				</div>
				<div class="widget-data m-form-grid-row">
					<div class="m-form-grid-33">
						<div>Last Month</div>
						<div>$137,712.00 USD</div>
					</div>
					<div class="m-form-grid-33">
						<div>This Month</div>
						<div>$999,999,999.00 USD</div>
					</div>
					<div class="m-form-grid-33">
						<div>Last MTD</div>
						<div>$25,875.00 USD</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	`],

	[true,  "widget-weekly-forecast", 		"item item-100 item-forecast",		'<div class="m-card"><div class="m-card-hdr"><div class="icon-title"><div class="icon"><svg viewBox="0 0 511.634 511.634"><g><title>Weekly Forecast</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0" /> <path d="M482.513,83.942c-7.225-7.233-15.797-10.85-25.694-10.85h-36.541v-27.41c0-12.56-4.477-23.315-13.422-32.261C397.906,4.475,387.157,0,374.591,0h-18.268c-12.565,0-23.318,4.475-32.264,13.422c-8.949,8.945-13.422,19.701-13.422,32.261v27.41h-109.63v-27.41c0-12.56-4.475-23.315-13.422-32.261C178.64,4.475,167.886,0,155.321,0H137.05c-12.562,0-23.317,4.475-32.264,13.422c-8.945,8.945-13.421,19.701-13.421,32.261v27.41H54.823c-9.9,0-18.464,3.617-25.697,10.85c-7.233,7.232-10.85,15.8-10.85,25.697v365.453c0,9.89,3.617,18.456,10.85,25.693c7.232,7.231,15.796,10.849,25.697,10.849h401.989c9.897,0,18.47-3.617,25.694-10.849c7.234-7.234,10.852-15.804,10.852-25.693V109.639C493.357,99.739,489.743,91.175,482.513,83.942z M137.047,475.088H54.823v-82.23h82.224V475.088z M137.047,374.59H54.823v-91.358h82.224V374.59z M137.047,264.951H54.823v-82.223h82.224V264.951z M130.627,134.333c-1.809-1.809-2.712-3.946-2.712-6.423V45.686c0-2.474,0.903-4.617,2.712-6.423c1.809-1.809,3.946-2.712,6.423-2.712h18.271c2.474,0,4.617,0.903,6.423,2.712c1.809,1.807,2.714,3.949,2.714,6.423v82.224c0,2.478-0.909,4.615-2.714,6.423c-1.807,1.809-3.946,2.712-6.423,2.712H137.05C134.576,137.046,132.436,136.142,130.627,134.333z M246.683,475.088h-91.365v-82.23h91.365V475.088z M246.683,374.59h-91.365v-91.358h91.365V374.59z M246.683,264.951h-91.365v-82.223h91.365V264.951z M356.323,475.088h-91.364v-82.23h91.364V475.088zM356.323,374.59h-91.364v-91.358h91.364V374.59z M356.323,264.951h-91.364v-82.223h91.364V264.951z M349.896,134.333c-1.807-1.809-2.707-3.946-2.707-6.423V45.686c0-2.474,0.9-4.617,2.707-6.423c1.808-1.809,3.949-2.712,6.427-2.712h18.268c2.478,0,4.617,0.903,6.427,2.712c1.808,1.807,2.707,3.949,2.707,6.423v82.224c0,2.478-0.903,4.615-2.707,6.423c-1.807,1.809-3.949,2.712-6.427,2.712h-18.268C353.846,137.046,351.697,136.142,349.896,134.333z M456.812,475.088h-82.228v-82.23h82.228V475.088z M456.812,374.59h-82.228v-91.358h82.228V374.59z M456.812,264.951h-82.228v-82.223h82.228V264.951z"/></g></svg></div><div class="title">WEEKLY FORECAST</div> </div><div class="actions"><div class="text-action">FULL CALENDAR</div></div></div><div class="m-card-bdy m-card-bdy-no-padding"><div class="m-7day-calendar"><div class="row"><div class="day"><div class="date">September 21</div><div class="activity"><ul><li class="status-invoices">9999 Invoices:<br/>$999,999,999.99 USD</li><li class="status-payments">9999 Payments:<br/>$999,999,999.99 USD</li><li class="status-projected">9999 Projected:<br/>$999,999,999.99 USD</li></ul></div></div><div class="day"><div class="date">September 22</div><div class="activity"><ul><li class="status-invoices">9999 Invoices:<br/>$999,999,999.99 USD</li><li class="status-payments">9999 Payments:<br/>$999,999,999.99 USD</li><li class="status-projected">9999 Projected:<br/>$999,999,999.99 USD</li></ul></div></div><div class="day"><div class="date">September 23</div><div class="activity"><ul><li class="status-invoices">9999 Invoices:<br/>$999,999,999.99 USD</li><li class="status-payments">9999 Payments:<br/>$999,999,999.99 USD</li><li class="status-projected">9999 Projected:<br/>$999,999,999.99 USD</li></ul></div></div><div class="day"><div class="date">September 24</div><div class="activity"><ul><li class="status-invoices">9999 Invoices:<br/>$999,999,999.99 USD</li><li class="status-payments">9999 Payments:<br/>$999,999,999.99 USD</li><li class="status-projected">9999 Projected:<br/>$999,999,999.99 USD</li></ul></div></div></div><div class="row"><div class="day"><div class="date">September 25</div><div class="activity"><ul><li class="status-invoices">9999 Invoices:<br/>$999,999,999.99 USD</li><li class="status-payments">9999 Payments:<br/>$999,999,999.99 USD</li><li class="status-projected">9999 Projected:<br/>$999,999,999.99 USD</li></ul></div></div><div class="day"><div class="date">September 26</div><div class="activity"><ul><li class="status-invoices">9999 Invoices:<br/>$999,999,999.99 USD</li><li class="status-payments">9999 Payments:<br/>$999,999,999.99 USD</li><li class="status-projected">9999 Projected:<br/>$999,999,999.99 USD</li></ul></div></div><div class="day"><div class="date">September 27</div><div class="activity"><ul><li class="status-invoices">9999 Invoices:<br/>$999,999,999.99 USD</li><li class="status-payments">9999 Payments:<br/>$999,999,999.99 USD</li><li class="status-projected">9999 Projected:<br/>$999,999,999.99 USD</li></ul></div></div><div class="day day-last"><div class="date">September 28</div><div class="activity"><ul><li class="status-invoices">9999 Invoices:<br/>$999,999,999.99 USD</li><li class="status-payments">9999 Payments:<br/>$999,999,999.99 USD</li><li class="status-projected">9999 Projected:<br/>$999,999,999.99 USD</li></ul></div></div></div></div></div></div>'],
	[true,  "widget-expiring-credit-cards", "item item-50 item-quick-list",		'<div class="m-card"><div class="m-card-hdr"><div class="icon-title"><div class="icon"><svg viewBox="0 0 548.176 548.176"><g><title>Expiring Credit Card</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0" /><path d="M534.754,68.238c-8.945-8.945-19.698-13.417-32.258-13.417H45.681c-12.562,0-23.313,4.471-32.264,13.417C4.471,77.185,0,87.936,0,100.499v347.173c0,12.566,4.471,23.318,13.417,32.264c8.951,8.946,19.702,13.419,32.264,13.419h456.815c12.56,0,23.312-4.473,32.258-13.419c8.945-8.945,13.422-19.697,13.422-32.264V100.499C548.176,87.936,543.699,77.185,534.754,68.238z M511.627,447.679c0,2.478-0.903,4.613-2.711,6.427c-1.807,1.8-3.949,2.703-6.42,2.703H45.681c-2.473,0-4.615-0.903-6.423-2.71c-1.807-1.813-2.712-3.949-2.712-6.427V274.088h475.082V447.679z M511.627,164.449H36.545v-63.954c0-2.474,0.902-4.611,2.712-6.423c1.809-1.803,3.951-2.708,6.423-2.708h456.815c2.471,0,4.613,0.901,6.42,2.708c1.808,1.812,2.711,3.949,2.711,6.423V164.449L511.627,164.449z"/><rect x="73.092" y="383.719" width="73.089" height="36.548"/><rect x="182.728" y="383.719" width="109.634" height="36.548"/></g></svg></div><div class="title">EXPIRING CREDIT CARDS</div> </div><div class="actions"><div class="text-action">ALL</div></div></div><div class="m-card-bdy m-card-bdy-no-padding"><div class="m-table m-table-inline"><table id="expiring-credit-cards-table" border="0" cellspacing="0" cellpadding="0"></table></div></div></div>'],
	[true,  "widget-new-customers", 		"item item-50 item-quick-list",		'<div class="m-card"><div class="m-card-hdr"><div class="icon-title"><div class="icon"><svg viewBox="0 0 80.13 80.13"><g><title>New Customers</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0" /><path d="M48.355,17.922c3.705,2.323,6.303,6.254,6.776,10.817c1.511,0.706,3.188,1.112,4.966,1.112 c6.491,0,11.752-5.261,11.752-11.751c0-6.491-5.261-11.752-11.752-11.752C53.668,6.35,48.453,11.517,48.355,17.922z M40.656,41.984 c6.491,0,11.752-5.262,11.752-11.752s-5.262-11.751-11.752-11.751c-6.49,0-11.754,5.262-11.754,11.752S34.166,41.984,40.656,41.984 z M45.641,42.785h-9.972c-8.297,0-15.047,6.751-15.047,15.048v12.195l0.031,0.191l0.84,0.263 c7.918,2.474,14.797,3.299,20.459,3.299c11.059,0,17.469-3.153,17.864-3.354l0.785-0.397h0.084V57.833 C60.688,49.536,53.938,42.785,45.641,42.785z M65.084,30.653h-9.895c-0.107,3.959-1.797,7.524-4.47,10.088 c7.375,2.193,12.771,9.032,12.771,17.11v3.758c9.77-0.358,15.4-3.127,15.771-3.313l0.785-0.398h0.084V45.699 C80.13,37.403,73.38,30.653,65.084,30.653z M20.035,29.853c2.299,0,4.438-0.671,6.25-1.814c0.576-3.757,2.59-7.04,5.467-9.276 c0.012-0.22,0.033-0.438,0.033-0.66c0-6.491-5.262-11.752-11.75-11.752c-6.492,0-11.752,5.261-11.752,11.752 C8.283,24.591,13.543,29.853,20.035,29.853z M30.589,40.741c-2.66-2.551-4.344-6.097-4.467-10.032 c-0.367-0.027-0.73-0.056-1.104-0.056h-9.971C6.75,30.653,0,37.403,0,45.699v12.197l0.031,0.188l0.84,0.265 c6.352,1.983,12.021,2.897,16.945,3.185v-3.683C17.818,49.773,23.212,42.936,30.589,40.741z"/></g></svg></div><div class="title">NEW CUSTOMERS</div> </div><div class="actions"><div class="text-action">ALL</div></div></div><div class="m-card-bdy m-card-bdy-no-padding"><div class="m-table m-table-inline"><table id="new-customers-table" border="0" cellspacing="0" cellpadding="0"></table></div></div></div>'],
	[true,  "widget-failed-payments", 		"item item-50 item-quick-list",		'<div class="m-card"><div class="m-card-hdr"><div class="icon-title"><div class="icon"><svg viewBox="0 0 488.636 488.636"><title>Failed Payments</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0" /><g><path d="M384.936,125.936c7.1,0,9.1-9.6,2.7-12.5l-249.9-110.8c-15.2-6.8-33.1,0-39.9,15.3l-87.5,196.2c-6.8,15.2,0,33.1,15.3,39.9l50.4,21.8c6.3,2.8,13.5-1.8,13.5-8.7v-83.3c0-31.9,25.9-57.8,57.8-57.8h237.6V125.936z"/><path d="M450.336,153.136h-303.1c-16.9,0-30.6,13.7-30.6,30.6v214.1c0,16.9,13.7,30.6,30.6,30.6h40.7c-1-6-1.5-12.1-1.5-18.3c0-7,0.7-13.8,1.9-20.5h-32.8v-102.5h286.6v102.4h-32.9c1.2,6.7,1.9,13.5,1.9,20.5c0,6.2-0.5,12.3-1.5,18.3h40.7c16.9,0,30.6-13.7,30.6-30.6v-214C480.936,166.836,467.236,153.136,450.336,153.136z M442.136,224.036h-286.6v-32.1h286.6V224.036z"/><path d="M298.836,331.436c-43.4,0-78.6,35.2-78.6,78.6s35.2,78.6,78.6,78.6s78.6-35.2,78.6-78.6S342.236,331.436,298.836,331.436zM321.436,441.036c-3.4,4.2-7.9,7-13.1,8.4c-2.3,0.6-3.3,1.8-3.2,4.2c0.1,2.3,0,4.6,0,7c0,2.1-1.1,3.2-3.1,3.2c-2.5,0.1-5,0.1-7.5,0c-2.2,0-3.2-1.3-3.2-3.4c0-1.7,0-3.4,0-5.1c0-3.7-0.2-3.9-3.8-4.5c-4.6-0.7-9.1-1.8-13.3-3.8c-3.3-1.6-3.7-2.4-2.7-5.9c0.7-2.6,1.4-5.2,2.2-7.7c0.9-3,1.7-3.3,4.5-1.9c4.7,2.4,9.6,3.8,14.8,4.4c3.3,0.4,6.6,0.1,9.7-1.3c5.8-2.5,6.7-9.2,1.8-13.2c-1.7-1.4-3.5-2.4-5.5-3.2c-5.1-2.2-10.4-3.9-15.1-6.8c-7.8-4.6-12.7-11-12.1-20.5c0.6-10.7,6.7-17.3,16.5-20.9c4-1.5,4.1-1.4,4.1-5.6c0-1.4,0-2.9,0-4.3c0.1-3.2,0.6-3.7,3.8-3.8c1,0,2,0,2.9,0c6.8,0,6.8,0,6.8,6.8c0,4.8,0,4.8,4.8,5.5c3.6,0.6,7.1,1.6,10.5,3.1c1.9,0.8,2.6,2.1,2,4.1c-0.8,2.9-1.6,5.9-2.6,8.7c-0.9,2.7-1.8,3.1-4.4,1.9c-5.3-2.6-10.8-3.6-16.6-3.3c-1.5,0.1-3,0.3-4.4,0.9c-5,2.2-5.9,7.8-1.6,11.2c2.2,1.7,4.6,3,7.2,4.1c4.5,1.8,8.9,3.6,13.2,6C327.236,412.636,330.936,429.536,321.436,441.036z"/></g></svg></div><div class="title">FAILED PAYMENTS</div> </div><div class="actions"><div class="text-action">ALL</div></div></div><div class="m-card-bdy m-card-bdy-no-padding"><div class="m-table m-table-inline"><table id="failed-payments-table" border="0" cellspacing="0" cellpadding="0"></table></div></div></div>'],
	[true,  "widget-aging-invoices", 		"item item-50 item-quick-list",		'<div class="m-card"><div class="m-card-hdr"><div class="icon-title"><div class="icon"><svg viewBox="0 0 512.05 512.05"><g><title>Aging Invoices</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0" /><path d="M441.369,3.034c-4.16-3.008-9.536-3.872-14.4-2.176l-90.432,30.144l-74.56-29.824c-3.808-1.536-8.064-1.536-11.872,0l-74.56,29.824L85.081,0.858c-4.896-1.696-10.24-0.832-14.4,2.176c-4.16,3.008-6.656,7.84-6.656,12.992v480c0,5.152,2.464,9.984,6.656,12.96c4.16,3.04,9.536,3.744,14.432,2.208l90.432-30.144l74.592,29.824c3.808,1.568,8.064,1.568,11.872,0l74.56-29.824l90.432,30.144c1.632,0.544,3.328,0.832,5.024,0.832c3.328,0,6.592-1.024,9.344-3.04c4.192-2.976,6.656-7.808,6.656-12.96v-480C448.025,10.874,445.561,6.042,441.369,3.034zM144.025,96.026h128c8.832,0,16,7.168,16,16c0,8.832-7.168,16-16,16h-128c-8.832,0-16-7.168-16-16C128.025,103.194,135.193,96.026,144.025,96.026z M240.025,352.026h-96c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h96c8.832,0,16,7.168,16,16C256.025,344.858,248.857,352.026,240.025,352.026z M240.025,256.026h-96c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h96c8.832,0,16,7.168,16,16C256.025,248.858,248.857,256.026,240.025,256.026z M352.025,381.562v18.464c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-18.208c-5.152-1.472-9.984-3.68-14.336-6.56c-7.328-4.896-9.312-14.848-4.416-22.208c4.928-7.328,14.848-9.28,22.208-4.416c3.328,2.208,7.68,3.392,12.544,3.392c9.792,0,16-5.248,16-8s-6.208-8-16-8c-26.464,0-48-17.952-48-40c0-17.376,13.408-32.032,32-37.536v-18.464c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v18.208c5.152,1.472,10.016,3.68,14.336,6.56c7.328,4.896,9.312,14.848,4.416,22.176c-4.928,7.328-14.816,9.344-22.208,4.416c-3.296-2.208-7.648-3.36-12.544-3.36c-9.792,0-16,5.248-16,8s6.208,8,16,8c26.464,0,48,17.952,48,40C384.025,361.402,370.617,376.058,352.025,381.562zM368.025,192.026h-224c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h224c8.832,0,16,7.168,16,16C384.025,184.858,376.857,192.026,368.025,192.026z"/></g></svg></div><div class="title">AGING INVOICES</div> </div><div class="actions"><div class="text-action">ALL</div></div></div><div class="m-card-bdy m-card-bdy-no-padding"><div class="m-table m-table-inline"><table id="invoices-aging-table" border="0" cellspacing="0" cellpadding="0"></table></div></div></div>'],

	[false, "widget-net-earned-revenue", 	"item item-100 item-graph",			'<div class="m-card"><div class="m-card-hdr"><div class="icon-title"><div class="icon"><svg viewBox="0 0 512 512"><g><title>Net Earned Revenue</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0" /><path d="M493.268,429.317H82.683V18.732C82.683,8.387,74.296,0,63.951,0S45.22,8.387,45.22,18.732v410.584H18.732 C8.387,429.316,0,437.703,0,448.047c0,10.345,8.387,18.732,18.732,18.732H45.22v26.489c0,10.345,8.387,18.732,18.732,18.732 s18.732-8.387,18.732-18.732V466.78h410.585c10.345,0,18.732-8.387,18.732-18.732S503.613,429.317,493.268,429.317z"/><path d="M207.06,223.207h-71.555c-10.345,0-18.732,8.387-18.732,18.732v143.672c0,3.449,2.796,6.244,6.244,6.244h96.531 c3.448,0,6.244-2.796,6.244-6.244V241.939C225.792,231.594,217.405,223.207,207.06,223.207z"/><path d="M350.158,162.916h-71.543c-10.345,0-18.732,8.387-18.732,18.732v203.963c0,3.449,2.796,6.244,6.244,6.244h96.518 c3.448,0,6.244-2.796,6.244-6.244V181.648C368.89,171.303,360.503,162.916,350.158,162.916z"/><path d="M493.268,102.625h-71.555c-10.345,0-18.732,8.387-18.732,18.732v264.254c0,3.448,2.796,6.244,6.244,6.244h96.531 c3.448,0,6.244-2.796,6.244-6.244V121.357C512,111.012,503.613,102.625,493.268,102.625z"/></g></svg></div><div class="title">NET EARNED REVENUE</div> </div><div class="actions"><div class="text-action">VIEW</div></div></div><div class="m-card-bdy"><div class="t-wrp"><img class="dash-image" src="/assets/images/netearnedrevenue.png" /></div></div></div>'],
	[false, "widget-net-collections", 		"item item-100 item-graph",			'<div class="m-card"><div class="m-card-hdr"><div class="icon-title"><div class="icon"><svg viewBox="0 0 512 512"><g><title>Net Collections</title><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0" /><path d="M493.268,429.317H82.683V18.732C82.683,8.387,74.296,0,63.951,0S45.22,8.387,45.22,18.732v410.584H18.732 C8.387,429.316,0,437.703,0,448.047c0,10.345,8.387,18.732,18.732,18.732H45.22v26.489c0,10.345,8.387,18.732,18.732,18.732 s18.732-8.387,18.732-18.732V466.78h410.585c10.345,0,18.732-8.387,18.732-18.732S503.613,429.317,493.268,429.317z"/><path d="M207.06,223.207h-71.555c-10.345,0-18.732,8.387-18.732,18.732v143.672c0,3.449,2.796,6.244,6.244,6.244h96.531 c3.448,0,6.244-2.796,6.244-6.244V241.939C225.792,231.594,217.405,223.207,207.06,223.207z"/><path d="M350.158,162.916h-71.543c-10.345,0-18.732,8.387-18.732,18.732v203.963c0,3.449,2.796,6.244,6.244,6.244h96.518 c3.448,0,6.244-2.796,6.244-6.244V181.648C368.89,171.303,360.503,162.916,350.158,162.916z"/><path d="M493.268,102.625h-71.555c-10.345,0-18.732,8.387-18.732,18.732v264.254c0,3.448,2.796,6.244,6.244,6.244h96.531 c3.448,0,6.244-2.796,6.244-6.244V121.357C512,111.012,503.613,102.625,493.268,102.625z"/></g></svg></div><div class="title">NET COLLECTIONS</div> </div><div class="actions"><div class="text-action">VIEW</div></div></div><div class="m-card-bdy"><div class="t-wrp"><img class="dash-image" src="/assets/images/netcollections.png" /></div></div></div>'],

];






function dashboardSortable() {

	// Setup Muuri items
	grid = new Muuri('.grid', {
		dragEnabled: true,
		dragSortInterval: 0,

		dragSortPredicate: {
			threshold: 75,
			action: 'move'
		},

		layout: {
			fillGaps: true
	  	}

	});

	// Load grid with active widgets
	for( var i=0, len = gridData.length; i<len; i++ ) {
		var widgetActive = gridData[i][0];
		var widgetId = gridData[i][1];
		var widgetClass = gridData[i][2];
		var widgetContent = gridData[i][3];
	
		if(widgetActive) {
			var div = document.createElement('div');
			div.setAttribute("id", widgetId);
			div.setAttribute("class", widgetClass);
			div.innerHTML = widgetContent;
      	    grid.add(div);
		}

		// Load widgets with data
		if(widgetId === "widget-expiring-credit-cards" ) {
			initExpiringCreditCards("expiring-credit-cards-table");
		}
		if(widgetId === "widget-new-customers" ) {
			initNewCustomers("new-customers-table");
		}
		if(widgetId === "widget-failed-payments" ) {
			initFailedPayments("failed-payments-table");
		}
		if(widgetId === "widget-aging-invoices" ) {
			initAgingInvoices("invoices-aging-table");
		}
	}

	// Activate the grid
	grid.refreshItems().layout();
}



$(document).on("click", '.modal-dashboard-settings-apply-action', function(e, ele){
	$('input.widgets-check').each(function () {
		var widget = $(this).attr("id");
		widget = widget.slice(0, -6);

		if( findWidget(widget) ) {
			if( ! $(this).is(':checked') ) {
				removeWidget(widget);
			}	
		} else {
			if( $(this).is(':checked') ) {
				addWidget(widget);
			}			
		}
	});

	$("#modal-dashboard-settings").hide();
});


$(document).on("click", '.modal-dashboard-settings-cancel-action', function(e, ele){
	$("#modal-dashboard-settings").hide();
});


$(document).on("click", '#show-modal-dashboard-settings', function(e, ele){
	$("#modal-dashboard-settings").show();
});




function findWidget(widget) {
	for( var i=0, len = gridData.length; i<len; i++ ) {
		if(gridData[i][1] === widget) {
			return gridData[i][0];
		}
	}
}

function addWidget(widget) {
	for( var i=0, len = gridData.length; i<len; i++ ) {
		var widgetActive = gridData[i][0];
		var widgetId = gridData[i][1];
		var widgetClass = gridData[i][2];
		var widgetContent = gridData[i][3];
	
		if(widgetId === widget) {
			gridData[i][0] = true;

			var div = document.createElement('div');
			div.setAttribute("id", widgetId);
			div.setAttribute("class", widgetClass);
			div.innerHTML = widgetContent;
      	    grid.add(div);

			// Load widgets with data
			if(widgetId === "widget-expiring-credit-cards" ) {
				initExpiringCreditCards("expiring-credit-cards-table");
			}
			if(widgetId === "widget-new-customers" ) {
				initNewCustomers("new-customers-table");
			}
			if(widgetId === "widget-failed-payments" ) {
				initFailedPayments("failed-payments-table");
			}
			if(widgetId === "widget-aging-invoices" ) {
				initAgingInvoices("invoices-aging-table");
			}
		}
	}

	// Refresh the grid
	// THIS IS A TIMING HACK
	// WE ARE LOADING CONTENT IN ON THE FLY ABOVE AND "refreshItems()" being called too early... which means the height for the added widget wasn't fully
	// expressed which led to a weird widget overlay bug.

	setTimeout(function(){ 
		grid.refreshItems().layout();
	}, 1000);


	
}

function removeWidget(widget) {
	counter = 0;
	for( var i=0, len = gridData.length; i<len; i++ ) {
		var widgetActive = gridData[i][0];
		var widgetId = gridData[i][1];
		var widgetClass = gridData[i][2];
		var widgetContent = gridData[i][3];

		counter = counter + 1;

		if(widgetId === widget) {
			gridData[i][0] = false;
			grid.remove( i, {removeElements: true} );
		}
	}

	// Refresh the grid
	grid.refreshItems().layout();
}


function initExpiringCreditCards(target) {
	initTable(tableExpiringCreditCardsSettings, tableExpiringCreditCards, target);
}

function initNewCustomers(target) {
	initTable(tableNewCustomersSettings, tableNewCustomers, target);
}

function initFailedPayments(target) {
	initTable(tableFailedPaymentsSettings, tableFailedPayments, target);
}

function initAgingInvoices(target) {
	initTable(tableAgingInvoicesSettings, tableAgingInvoices, target);
}

