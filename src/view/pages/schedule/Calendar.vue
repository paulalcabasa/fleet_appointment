<template>

  <v-row class="fill-height">

      <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
          <v-card-title>
            <span class="headline">Event Details</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                
                <v-col cols="12">
                  <v-text-field label="Event Name*" required></v-text-field>
                </v-col>

				<v-col cols="12" sm="6" md="4">
					<v-menu
						v-model="newEvent.startMenu"
						:close-on-content-click="false"
						:nudge-right="40"
						transition="scale-transition"
						offset-y
						min-width="290px"
					>
						<template v-slot:activator="{ on, attrs }">
						<v-text-field
							v-model="newEvent.start"
							label="Start Date*"
							prepend-icon="event"
							readonly
							v-bind="attrs"
							v-on="on"
						></v-text-field>
						</template>
						<v-date-picker v-model="newEvent.start" @input="newEvent.startMenu = false"></v-date-picker>
					</v-menu>

					<v-menu
						v-model="newEvent.endMenu"
						:close-on-content-click="false"
						:nudge-right="40"
						transition="scale-transition"
						offset-y
						min-width="290px"
					>
						<template v-slot:activator="{ on, attrs }">
						<v-text-field
							v-model="newEvent.end"
							label="End Date*"
							prepend-icon="event"
							readonly
							v-bind="attrs"
							v-on="on"
						></v-text-field>
						</template>
						<v-date-picker v-model="newEvent.end" @input="newEvent.endMenu = false"></v-date-picker>
					</v-menu>
				</v-col>
        
            <!--     <v-col cols="12" >
                   <v-row
                      justify="space-around"
                      align="center"
                    >
                  
                      <v-date-picker
                        v-model="newEvent.start"
                        flat
                      ></v-date-picker>
                    
                      <v-date-picker
                        v-model="newEvent.end"
                        elevation="15"
                      ></v-date-picker>
                    </v-row>
                </v-col> -->
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-col>
          <v-sheet height="64">
          <v-toolbar flat color="white">
            <v-btn outlined class="mr-4" color="grey darken-2" @click="dialog = true" v-if="user.userType == 'dealer'">
              New event
              </v-btn>
              <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
              Today
              </v-btn>
              <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small>mdi-chevron-right</v-icon>
              </v-btn>
              <v-toolbar-title>{{ title }}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu bottom right>
              <template v-slot:activator="{ on }">
                  <v-btn
                  outlined
                  color="grey darken-2"
                  v-on="on"
                  >
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>mdi-menu-down</v-icon>
                  </v-btn>
              </template>
              <v-list>
                  <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                  </v-list-item>
              </v-list>
              </v-menu>
          </v-toolbar>
          </v-sheet>
          <v-sheet height="600">
          <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="events"
              :event-color="getEventColor"
              :now="today"
              :type="type"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
              @change="updateRange"
          ></v-calendar>
          <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-x
          >
              <v-card
              color="grey lighten-4"
              min-width="350px"
              flat
              >
              <v-toolbar
                  :color="selectedEvent.color"
                  dark
              >
                  <v-btn icon>
                  <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
              </v-toolbar>
              <v-card-text>
                  <span v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                  <v-btn
                  text
                  color="secondary"
                  @click="selectedOpen = false"
                  >
                  Cancel
                  </v-btn>
              </v-card-actions>
              </v-card>
          </v-menu>
          </v-sheet>
      </v-col>
  </v-row>
</template>

<script>

export default {
    name: "calendar",
    components: {},
    data() {
        return {
			user : this.$store.getters.currentUser,
            newEvent : {
              start: new Date().toISOString().substr(0, 10),
              end: new Date().toISOString().substr(0, 10),
			  name: '',
			  startMenu: false,
			  endMenu: false,
			},
		 	
			
            dialogm1: '',
            dialog: false,
            focus: '',
            type: 'month',
            typeToLabel: {
              month: 'Month',
              week: 'Week',
              day: 'Daily'
			},
			

            start: null,
            end: null,
            selectedEvent: {},
            selectedElement: null,
            selectedOpen: false,
            events: [ ],
            colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
            names: ['Meeting', 'Holiday', 'Isuzu Cebu', 'Isuzu Alabang', 'Isuzu Pasig', 'Isuzu Davao'],
		}
	},
    mounted() {
		this.$refs.calendar.checkChange()
    },
    updated() {},
    created() {},
    methods: {
		formatDate (date) {
			if (!date) return null

			const [year, month, day] = date.split('-')
			return `${month}/${day}/${year}`
		},
		parseDate (date) {
			if (!date) return null

			onst [month, day, year] = date.split('/')
			return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
		},
		viewDay ({ date }) {
			this.focus = date
			this.type = 'day'
		},
		getEventColor (event) {
		return event.color
		},
    setToday () {
      this.focus = this.today
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
        } else {
          open()
        }

      nativeEvent.stopPropagation()
    },
    updateRange ({ start, end }) {
      const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)
    
      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: this.formatDate(first, !allDay),
          end: this.formatDate(second, !allDay),
          color: this.colors[this.rnd(0, this.colors.length - 1)],
        })  
	  }
		

      this.start = start
      this.end = end
      this.events = events
    },
    nth (d) {
      return d > 3 && d < 21
        ? 'th'
        : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    formatDate (a, withTime) {
      return withTime
        ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
        : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
    },
    },
    computed: {
		title () {
			const { start, end } = this
			if (!start || !end) {
				return ''
			}

			const startMonth = this.monthFormatter(start)
			const endMonth = this.monthFormatter(end)
			const suffixMonth = startMonth === endMonth ? '' : endMonth

			const startYear = start.year
			const endYear = end.year
			const suffixYear = startYear === endYear ? '' : endYear

			const startDay = start.day + this.nth(start.day)
			const endDay = end.day + this.nth(end.day)

			switch (this.type) {
				case 'month':
				return `${startMonth} ${startYear}`
				case 'week':
				case '4day':
				return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
				case 'day':
				return `${startMonth} ${startDay} ${startYear}`
			}
			return ''
		},
		monthFormatter () {
			return this.$refs.calendar.getFormatter({
				timeZone: 'UTC', month: 'long',
			})
		}
    },
    watch: {
		
	}
};
</script>
